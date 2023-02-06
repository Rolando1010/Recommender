import { test, expect } from "@playwright/test";

test("test api scraping", async ({ request }) => {
    const cases = [
        {url: "https://recommender-ai.vercel.app", result: {
            title: "Recommender",
            description: "",
            icon: "https://recommender-ai.vercel.app/icon.png",
        }},
        {url: "https://www.wikidex.net/", result: {
            title: "WikiDex, la enciclopedia Pokémon",
            description: "WikiDex es la mayor enciclopedia Pokémon en español, con 26&#160;890 artículos, que abarca toda la información oficial de los videojuegos, anime, manga y Juego de Cartas Coleccionables.",
            icon: "https://www.wikidex.net/favicon.ico"
        }},
        {url: "https://www.spanishbooks.net", result: null},
        // {url: "https://www.spanishbooks.net/guide_english", result: null},
        // {url: "https://www.spanishbooks.net/guide_english.php", result: null},
        // {url: "https://www.spanishbooks.net/guides/guide_english", result: null},
        // {url: "https://www.spanishbooks.net/guides/guide_english.php", result: null}
    ]
    for(const { url, result } of cases){
        const response = await request.get(`/api/scraping?url=${url}`);
        expect(response.ok()).toBeTruthy();
        const json = await response.json();
        if(result){
            const { title, description, icon } = result;
            expect(json.title).toBe(title);
            expect(json.description).toBe(description);
            expect(json.icon).toBe(icon);
        } else {
            expect(result).toBeNull();
        }
    }
});