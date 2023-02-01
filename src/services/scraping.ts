import * as cheerio from "cheerio";
import { isURL } from "src/utils/urls";

const scrapPage = async (url: string) => {
	try {
		const response = await fetch(url);
		const html = await response.text();
		const selector = cheerio.load(html);
		const title = selector("title").text();
		const description = selector("meta[name='description']").attr("content") || "";
		let icon = (selector("link[rel='icon']") || selector("link[rel='shortcut icon']"))
			.attr("href") || "/favicon.ico";
		if(!isURL(icon)) {
			icon = (new URL(url)).origin + icon;
		}
		return { title, description, icon, html, url };
	} catch {
		return null;
	}
}

export { scrapPage };