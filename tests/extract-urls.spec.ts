import { test, expect } from "@playwright/test";
import { extractURLs } from "src/utils/urls";

test("extract only www urls", () => {
    expect(extractURLs(`
    www.englishdictionary.com
www.englishpod101.com
www.english-dictionary.net
www.english-dictionary.com

www.englishdictionary.com
    `)).toStrictEqual([
        "www.englishdictionary.com",
        "www.englishpod101.com",
        "www.english-dictionary.net",
        "www.english-dictionary.com",
        "www.englishdictionary.com"
    ])
});

test("extract full url", () => {
    expect(extractURLs(`
https://www.spanishbooks.net
https://www.spanishbooks.net/guide_english
https://www.spanishbooks.net/guide_english.php

https://www.spanishbooks.net/guides/guide_english
https://www.spanishbooks.net/guides/guide_english.php
    `)).toStrictEqual([
        "https://www.spanishbooks.net",
        "https://www.spanishbooks.net/guide_english",
        "https://www.spanishbooks.net/guide_english.php",
        "https://www.spanishbooks.net/guides/guide_english",
        "https://www.spanishbooks.net/guides/guide_english.php"
    ]);
});