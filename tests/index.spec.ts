import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page).toHaveTitle(/Club See 2/);

  const twitter = page.getByRole('link', { name: '🐦 Twitter' });
  await expect(twitter).toHaveAttribute('href', 'https://twitter.com/see2club');

  const youtube = page.getByRole('link', { name: '📺 Instagram' });
  await expect(youtube).toHaveAttribute('href', 'https://www.instagram.com/see2.club');

  const github = page.getByRole('link', { name: '🐙 Github' });
  await expect(github).toHaveAttribute('href', 'https://github.com/see2-club');

  const blog = page.getByRole('link', { name: '📝 Official Website' });
  await expect(blog).toHaveAttribute('href', 'https://see2.club');

  const phone = page.getByRole('link', { name: '☎️ Call me' });
  await expect(phone).toHaveAttribute('href', 'tel://+00000000000');

  const email = page.getByRole('link', { name: '📪 Email me' });
  await expect(email).toHaveAttribute('href', 'mailto://contactus@see2.club');
});
