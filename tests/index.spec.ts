import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page).toHaveTitle(/Data Revolution/);

  const twitter = page.getByRole('link', { name: '🐦 Twitter' });
  await expect(twitter).toHaveAttribute('href', 'https://x.com/DaRev_tech');

  const youtube = page.getByRole('link', { name: '🏛️ Linkedin' });
  await expect(youtube).toHaveAttribute('href', 'https://www.linkedin.com/company/darev/');

  const github = page.getByRole('link', { name: '🐙 Github' });
  await expect(github).toHaveAttribute('href', 'https://github.com/DaRevProtocol');

  const blog = page.getByRole('link', { name: '📝 Official Website' });
  await expect(blog).toHaveAttribute('href', 'https://darev.tech');

  const phone = page.getByRole('link', { name: '☎️ Call me' });
  await expect(phone).toHaveAttribute('href', 'tel://+00000000000');

  const email = page.getByRole('link', { name: '📪 Email me' });
  await expect(email).toHaveAttribute('href', 'mailto://contactus@darev.io');
});
