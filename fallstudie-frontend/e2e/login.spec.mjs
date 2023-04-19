// npx playwright install
import { test, expect } from '@playwright/test'

test('should let a user login', async ({ page }) => {
  await page.goto('http://localhost:3000/login')
  await page.fill("input[name='email']", "adamadmin@blog.ch")
  await page.fill("input[name='password']", "admin1234")
  await page.click("button")
  await expect(page).toHaveURL('http://localhost:3000/')
  await expect(page.locator('.auth .link:nth-child(2) h3')).toContainText('Adam Admin')
})

test("should redirect to / when already logged in", async ({ page }) => {
  await page.goto('http://localhost:3000/login')
  await page.fill("input[name='email']", "adamadmin@blog.ch")
  await page.fill("input[name='password']", "admin1234")
  await page.click("button")
  await page.waitForNavigation()
  await page.goto('http://localhost:3000/login')
  await expect(page).toHaveURL('http://localhost:3000/')
})