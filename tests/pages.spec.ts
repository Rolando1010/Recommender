import { test, expect} from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("./");
});

test("page has title", async ({ page }) => {
    await expect(page).toHaveTitle("Recommender");
});

test("redirection from home to paginas", async ({ page }) => {
    await expect(page).toHaveURL("./paginas");
});

test("search form change search param", async ({ page }) => {
    const form = page.locator(".search-form_search__gDRfX");
    expect(form).toBeDefined();
    await form.locator("input").fill("test");
    await form.press("Enter");
    await expect(page).toHaveURL("./paginas?search=test");
});