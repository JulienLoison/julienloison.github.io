import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

type Route = {
  url: string
  name: string
}

const routes: Route[] = [
  {
    url: '/',
    name: 'Home',
  },
  {
    url: '/styleguide',
    name: 'Styleguide',
  },
]

routes.forEach((route) => {
  test.describe(route.name, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(route.url)
    })

    test(`page exists`, async ({ page }) => {
      const response = await page.goto(route.url)
      expect(response).not.toBeNull()
      expect(response!.status()).toBe(200)
    })

    test(`page has title`, async ({ page }) => {
      await expect(page).toHaveTitle(/.+/)
    })

    test(`page has lang attribute`, async ({ page }) => {
      await expect(page.locator('html')).toHaveAttribute('lang', 'fr')
    })

    test('page has one and only h1', async ({ page }) => {
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
    })

    test('should not have any automatically detectable accessibility issues', async ({
      page,
    }) => {
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
      expect(accessibilityScanResults.violations).toEqual([])
    })
  })
})
