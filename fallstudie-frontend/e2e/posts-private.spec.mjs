import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/login')
    await page.fill("input[name='email']", "adamadmin@blog.ch")
    await page.fill("input[name='password']", "admin1234")
    await page.locator("button").click()
    await page.waitForNavigation()
    await expect(page).toHaveURL('http://localhost:3000/')
})

test("can create post", async ({ page }) => {
    await page.goto('http://localhost:3000/posts/create')
    await page.fill("input[name='title']", "new post")
    await page.fill("textarea[name='text']", "new post body")
    await page.click("button")
    await expect(await page.locator("main ul li:first-child h2")).toHaveText("new post")
})

test("can edit post", async ({ page }) => {
    await page.goto('http://localhost:3000/posts/1/edit')
    await page.type("input[name='title']", "edited text")
    await page.click("button")
    await page.goto("http://localhost:3000/posts/1")
    await expect(await page.locator(".post h2")).toContainText("edited text")
})