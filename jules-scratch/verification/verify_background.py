import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        try:
            # Navigate to the local dev server
            await page.goto("http://127.0.0.1:8080/")

            # Wait for the hero section to be visible
            hero_section = page.locator("#hero")
            await expect(hero_section).to_be_visible(timeout=10000)

            # Click the theme switcher to go to dark mode
            theme_switcher = page.locator("[data-testid='theme-switcher']")
            await theme_switcher.click()

            # Wait for the theme to change
            await expect(page.locator("html")).to_have_class("dark", timeout=5000)

            # Take a screenshot of the top of the page in dark mode
            await page.screenshot(path="jules-scratch/verification/verification_top_dark.png")

            # Scroll to the footer
            footer = page.locator("footer")
            await footer.scroll_into_view_if_needed()

            # Wait for a moment to ensure the page has settled
            await page.wait_for_timeout(1000)

            # Take a screenshot of the bottom of the page in dark mode
            await page.screenshot(path="jules-scratch/verification/verification_bottom_dark.png")

            print("Screenshots taken successfully.")

        except Exception as e:
            print(f"An error occurred: {e}")
            # Take a screenshot on error to help debug
            await page.screenshot(path="jules-scratch/verification/error.png")

        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
