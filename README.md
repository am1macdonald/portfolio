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
