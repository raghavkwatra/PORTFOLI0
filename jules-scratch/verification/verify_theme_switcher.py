from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch()
    context = browser.new_context()
    page = context.new_page()
    page.goto("http://127.0.0.1:8080/")

    # Take a screenshot of the initial theme (light)
    page.screenshot(path="jules-scratch/verification/light-mode.png")

    # Click the theme switcher button
    theme_switcher_button = page.get_by_test_id("theme-switcher")
    theme_switcher_button.click()

    # Wait for the dark theme to be applied
    expect(page.locator("html")).to_have_class("dark", timeout=5000)

    # Take a screenshot of the dark theme
    page.screenshot(path="jules-scratch/verification/dark-mode.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
