# Portfolio

A static portfolio site for Adam MacDonald.

## Structure

- `index.html` — main page
- `style.css` — all styles
- `script.js` — loads project data from JSON
- `projects.json` — project entries (edit this to add/remove projects)
- `favicon.png` — site icon

## Usage

Open `index.html` in a browser, or serve with any static file server:

```sh
python3 -m http.server
```

Edit `projects.json` to manage the projects section. Each entry needs:

```json
{
	"title": "Project Name",
	"summary": "Short description",
	"image_url": "https://...",
	"live_url": "https://...",
	"repo_url": "https://..."
}
```

## Hosting on AWS (S3 + GitHub Actions)

Deployments are handled by [`.github/workflows/deploy-s3.yml`](.github/workflows/deploy-s3.yml) on push to `main` or `revamp`, or manually via **Actions → Deploy to S3 → Run workflow**.

### 1. Create an S3 bucket

1. In the AWS console, open **S3** → **Create bucket**.
2. Choose a **bucket name** (globally unique). If you use a custom domain later, the bucket name often matches the site hostname (for example `www.example.com`).
3. Pick the **AWS Region** you want (note it for GitHub).
4. Under **Block Public Access settings for this bucket**: for a public static site served directly from S3, you must **uncheck** “Block all public access” and confirm. To keep the bucket private, use **CloudFront** with an origin access control (see [Optional: CloudFront](#optional-amazon-cloudfront) below).
5. Create the bucket.

### 2. Turn on static website hosting

1. Open the bucket → **Properties** → **Static website hosting** → **Edit**.
2. Enable hosting, set **Index document** to `index.html`, and optionally **Error document** to `index.html` if you want client-side-style fallback for unknown paths.
3. Save and copy the **Bucket website endpoint** URL (you will use this to preview the site).

### 3. Bucket policy (public read)

**Permissions** → **Bucket policy** → add a policy that allows anonymous `GetObject` on objects (replace `YOUR-BUCKET-NAME`):

```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "PublicReadGetObject",
			"Effect": "Allow",
			"Principal": "*",
			"Action": "s3:GetObject",
			"Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
		}
	]
}
```

### 4. IAM user for GitHub Actions

Create a dedicated IAM user (no console access) used only for deploys:

1. **IAM** → **Users** → **Create user** → enable **Programmatic access** (access key).
2. Attach an **inline policy** (or custom policy) that allows sync to your bucket (replace `YOUR-BUCKET-NAME`):

```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": ["s3:ListBucket"],
			"Resource": "arn:aws:s3:::YOUR-BUCKET-NAME"
		},
		{
			"Effect": "Allow",
			"Action": ["s3:DeleteObject", "s3:GetObject", "s3:PutObject"],
			"Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
		}
	]
}
```

3. Create an **access key** for this user and save the **Access key ID** and **Secret access key** securely.

### 5. Configure GitHub

In the GitHub repo: **Settings → Secrets and variables → Actions**.

**Variables** (repository variables)

- `AWS_ROLE_ARN` — IAM role for GitHub Actions OIDC (must allow deploy to the static site bucket)
- `AWS_REGION` — optional; defaults to `ca-central-1` in the workflow if unset

The workflow deploys to **`tech-crafted-by-adam-bucket-585279896095`** (same bucket as `my_infra` / techcraftedbyadam.com).

After the next push to `main` (or a manual workflow run), the site files are synced to that bucket with `aws s3 sync --delete`, excluding dev-only paths (for example `node_modules`, `.github`, and npm config files).

### Optional: Amazon CloudFront

You do **not** need CloudFront if you are fine with the S3 website endpoint (HTTP only). CloudFront is optional and useful for **HTTPS**, a **custom domain**, **edge caching**, and (if you want) a **private** S3 bucket. The same GitHub Actions workflow still uploads to the bucket; you only add a distribution in front.

#### Origin: public bucket (simplest)

If you already followed [Bucket policy (public read)](#3-bucket-policy-public-read):

1. In **CloudFront** → **Create distribution**.
2. **Origin domain**: choose your bucket’s **S3 website endpoint** (from **S3** → bucket → **Properties** → **Static website hosting** — it looks like `bucket-name.s3-website-region.amazonaws.com`). If the console offers only the REST endpoint (`bucket-name.s3.region.amazonaws.com`), pick **Enter origin domain** and paste the website endpoint URL manually.
3. **Viewer protocol policy**: **Redirect HTTP to HTTPS**.
4. **Default root object**: `index.html` (in the distribution settings; if you do not see it at creation time, set it under the default **Behavior** after the distribution exists).
5. Create the distribution and wait for deployment. Use the **Distribution domain name** (`*.cloudfront.net`) to test over HTTPS.

For a **custom domain**: request (or import) an **ACM** certificate in **us-east-1** (required for CloudFront), add the domain under **Alternate domain names** on the distribution, attach the certificate, then point DNS (**Route 53** ALIAS or your registrar’s **CNAME**) at the distribution domain name.

#### Origin: private bucket (OAC)

To leave **Block all public access** enabled on the bucket:

1. Create the distribution with **Origin domain** = the bucket’s **REST API** endpoint (`bucket-name.s3.region.amazonaws.com`), not the website endpoint.
2. Under **Origin access**, create or select an **Origin access control** (OAC) and allow CloudFront to update the bucket policy when prompted (or add the suggested policy yourself).
3. **Do not** use a public bucket policy for `Principal: "*"`; the OAC policy should allow `s3:GetObject` only for your distribution.
4. You may still want **Default root object** `index.html` and **Custom error responses** (e.g. 403 → `/index.html` with 200) if you rely on single-page-style fallbacks.

**Note:** A private REST origin does **not** apply S3 “static website hosting” redirect rules the same way as the website endpoint. For this portfolio (mostly `index.html` at the root), OAC + default root object is usually enough.

#### Cache invalidation after deploys

CloudFront caches objects until they expire. After a deploy, either wait for TTLs to elapse or invalidate paths (often `/*` for a small static site):

```sh
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

You can add a workflow step or a separate manual job later if you want this automated; it requires IAM permission `cloudfront:CreateInvalidation` and the distribution ID (for example as a GitHub Actions variable).
