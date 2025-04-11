import { expect, jest, test, beforeEach } from '@jest/globals';
import puppeteer from "puppeteer";
import portfinder from "portfinder";
import app from "../app.js";

let server = null;
let port = null;

jest.setTimeout(10000); 

beforeEach(async () => {
  port = await portfinder.getPortPromise();
  server = app.listen(port);
});

afterEach(async () => {
  await server.close();
});

test("home page links to about page", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${port}`);

  await Promise.all([
    page.waitForNavigation(),
    page.click('[data-test-id="about"]'),
  ]);

  expect(page.url()).toBe(`http://localhost:${port}/about`);

  await browser.close();
});
