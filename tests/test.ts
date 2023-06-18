import { expect, test } from '@playwright/test';

test('index page has expected header', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('application', { name: 'Welcome to SvelteKit' })).toBeVisible();
});
test('index page has expected footer', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('footer', { name: 'Welcome to SvelteKit' })).toBeVisible();
});
