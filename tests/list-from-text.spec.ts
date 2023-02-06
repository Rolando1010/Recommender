import { test, expect } from "@playwright/test";
import { extractListFromText } from "src/utils/text";

test("text with lines", () => {
    const text = `
Some common technologies that can be used to create a MIDI device include:
-The Java Sound API
-The Open Sound Control (OSC) protocol
-The Audio API
-The MIDI API
Each of these technologies has its own advantages and disadvantages, and the best choice will depend on the specific requirements of your project. For example, the Java Sound API is a good choice if you want to create a device that can be run on multiple platforms, but it
    `;
    const items = [
        "The Java Sound API",
        "The Open Sound Control (OSC) protocol",
        "The Audio API",
        "The MIDI API"
    ]
    const listFromText = extractListFromText(text);
    for(const item of items){
        expect(listFromText.some(element => element.name === item)).toBeTruthy()
    }
});

test("text without lines", () => {
    const text = `
There are many technologies that you can use to make a recommendation engine. Some common technologies that are used for recommendation engines include:
Machine learning algorithms: Machine learning algorithms can be used to analyze data and make predictions about user preferences. This can be used to make recommendations for products or services that users may be interested in.
Artificial intelligence: AI can be used to analyze data and make decisions in a way that mimics human behavior. This can be used to make recommendations based on
    `;
    const items = [
        {name: "Machine learning algorithms", description: "Machine learning algorithms can be used to analyze data and make predictions about user preferences. This can be used to make recommendations for products or services that users may be interested in."},
        {name: "Artificial intelligence", description: "AI can be used to analyze data and make decisions in a way that mimics human behavior. This can be used to make recommendations based on"}
    ]
    const listFromText = extractListFromText(text);
    for(const item of items){
        expect(listFromText.some(element =>
            element.name === item.name &&
            element.description === item.description
        )).toBeTruthy()
    }
});