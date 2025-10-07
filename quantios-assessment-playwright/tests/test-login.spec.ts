import { test, expect } from '@playwright/test'

test('login success', async ({ page }) => {
    await page.goto('https://qainterview.netlify.app/')
    await expect(page.locator('#loginBtn')).toBeVisible
    await page.getByRole('textbox', { name: 'Email Address' }).click()
    await page.getByRole('textbox', { name: 'Email Address' }).fill('test_user1')

    await page.getByRole('textbox', { name: 'Password' }).click()
    await page.getByRole('textbox', { name: 'Password' }).fill('Password@1234')
    await expect(page.locator('#loginBtn')).toBeVisible

    await page.getByRole('button', { name: 'Login' }).click()
    await expect(page.locator(':text-is("Stock Market Dashboard")')).toBeVisible

    await page.getByRole('button', { name: 'Logout' }).click()
    await expect(page.locator('#loginBtn')).toBeVisible
});
