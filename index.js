const express = require("express");
const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");

const app = express();

app.get("/screenshot", async (request, response) => {
	const browser = await puppeteer.launch({
		args: chromium.args,
		defaultViewport: chromium.defaultViewport,
		executablePath: await chromium.executablePath,
		headless: chromium.headless,
		ignoreHTTPSErrors: true,
	});

	try {
		const page = await browser.newPage();

		await page.goto("https://example.com");

		const screenshot = await page.screenshot({ fullPage: true });

		// IMPORTANT: https://docs.deta.sh/docs/common_issues/#nodejs-micros-cannot-serve-binary-files
		response.type("png");
		response.send(screenshot);
	} catch (error) {
		res.send("An error occured.");
	} finally {
		await browser.close();
	}
});

module.exports = app;
