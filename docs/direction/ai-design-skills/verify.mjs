import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', headless: true });
const origin = 'http://127.0.0.1:4174/';
const results = [];
/** @type {string[]} */
const errors = [];

try {
  for (const width of [1440, 1268, 390, 320]) {
    const height = width === 1268 ? 768 : width < 600 ? 844 : 900;
    const page = await browser.newPage({ viewport: { width, height } });
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('response', (response) => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
    await page.goto(origin);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1100);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.locator('.context-card').count(), 4);
    assert.equal(await page.evaluate(() => document.fonts.check('16px Geist')), true);
    assert.equal(await page.locator('meta[name="robots"]').getAttribute('content'), 'noindex, nofollow');
    assert.equal(await page.evaluate(() => [...document.querySelectorAll('a[href^="#"]')].every((link) => link instanceof HTMLAnchorElement && document.getElementById(link.hash.slice(1)))), true);
    await page.screenshot({ path: `screenshots/comp-${width}x${height}.png` });
    await page.keyboard.press('Tab');
    assert.equal(await page.locator('.skip-link').evaluate((node) => node === document.activeElement), true);
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('main').evaluate((node) => node === document.activeElement), true);

    await page.locator('.hero .primary-button').click();
    assert.equal(await page.evaluate(() => location.hash), '#evidencias');
    assert.equal(await page.locator('#evidencias').evaluate((node) => Math.abs(node.getBoundingClientRect().top - 32) < 2), true);
    await page.locator('.closing .primary-button').click();
    assert.equal(await page.evaluate(() => location.hash), '#evidencias');

    for (const summary of await page.locator('summary').all()) {
      await summary.focus();
      await page.keyboard.press('Enter');
      assert.equal(await summary.evaluate((node) => node.parentElement?.hasAttribute('open')), true);
      await page.keyboard.press('Enter');
      assert.equal(await summary.evaluate((node) => node.parentElement?.hasAttribute('open')), false);
    }

    if (width < 600) {
      await page.locator('.menu-toggle').click();
      assert.equal(await page.locator('dialog').evaluate((node) => node instanceof HTMLDialogElement && node.open), true);
      assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'), 'true');
      await page.keyboard.press('Shift+Tab');
      assert.equal(await page.locator('dialog').evaluate((node) => node.contains(document.activeElement)), true);
      await page.keyboard.press('Escape');
      await page.waitForFunction(() => document.querySelector('.menu-toggle')?.getAttribute('aria-expanded') === 'false');
      assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'), 'false');
      assert.equal(await page.locator('.menu-toggle').evaluate((node) => node === document.activeElement), true);
      await page.locator('.menu-toggle').click();
      await page.waitForTimeout(1000);
      if (width === 390) await page.screenshot({ path: 'screenshots/mobile-menu.png' });
      await page.locator('dialog a[href="#metodo"]').click();
      await page.waitForTimeout(100);
      assert.equal(await page.locator('dialog').evaluate((node) => node instanceof HTMLDialogElement && node.open), false);
      assert.equal(await page.locator('#metodo').evaluate((node) => node === document.activeElement), true);
    }

    await page.locator('.tagline').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1800);
    assert.equal(await page.locator('.tagline .is-lit').count(), 8);
    if (width === 390) await page.screenshot({ path: 'screenshots/mobile-tagline.png' });
    for (const section of await page.locator('main > section').all()) {
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
    }
    await page.evaluate(() => {
      if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(200);
    await page.screenshot({ path: `screenshots/comp-${width}x${height}-full.png`, fullPage: true });
    results.push({ width, height, overflow: false, font: true, anchors: true, ctas: true, keyboard: true, faq: true, tagline: true, mobileMenu: width < 600 });
    await page.close();
  }

  const reduced = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  await reduced.goto(origin);
  await reduced.locator('.tagline').scrollIntoViewIfNeeded();
  assert.equal(await reduced.evaluate(() => document.getAnimations().length), 0);
  assert.equal(await reduced.locator('.tagline').evaluate((node) => node.classList.contains('is-observed')), false);
  await reduced.screenshot({ path: 'screenshots/reduced-motion.png' });
  await reduced.close();

  const noJs = await browser.newPage({ viewport: { width: 390, height: 844 }, javaScriptEnabled: false });
  await noJs.goto(origin);
  assert.equal(await noJs.locator('.desktop-nav').isVisible(), true);
  assert.equal(await noJs.locator('h1').isVisible(), true);
  assert.equal(await noJs.locator('.menu-toggle').isVisible(), false);
  await noJs.locator('.hero .primary-button').click();
  assert.match(noJs.url(), /#evidencias$/);
  await noJs.locator('summary').first().click();
  assert.equal(await noJs.locator('details[open]').count(), 1);
  await noJs.screenshot({ path: 'screenshots/no-javascript.png' });
  await noJs.close();
  assert.deepEqual(errors, []);
  await writeFile('screenshots/checks.json', JSON.stringify({ results, reducedMotion: true, noJavaScript: true, errors }, null, 2));
  console.log('PASS: four viewports, CTA, anchors, keyboard, FAQ, menu, tagline, reduced motion, no JS, zero browser errors.');
} finally {
  await browser.close();
}
