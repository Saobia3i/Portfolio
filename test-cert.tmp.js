const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    executablePath: "C:\\Users\\USER\\AppData\\Local\\ms-playwright\\chromium-1217\\chrome-win64\\chrome.exe",
  });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(String(err)));

  // Home page - carousel
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.screenshot({ path: "C:\\Users\\USER\\AppData\\Local\\Temp\\claude\\e--Portfolio\\2462d803-9195-481d-9af9-5ab983a19e3e\\scratchpad\\home-light.png" });

  await page.evaluate(() => document.querySelector("#certificates")?.scrollIntoView());
  await page.waitForTimeout(300);
  await page.screenshot({ path: "C:\\Users\\USER\\AppData\\Local\\Temp\\claude\\e--Portfolio\\2462d803-9195-481d-9af9-5ab983a19e3e\\scratchpad\\home-carousel-light.png" });

  // Wait to see if carousel moves (animation)
  const pos1 = await page.evaluate(() => {
    const el = document.querySelector(".cert-carousel-track");
    return el ? getComputedStyle(el).transform : null;
  });
  await page.waitForTimeout(1500);
  const pos2 = await page.evaluate(() => {
    const el = document.querySelector(".cert-carousel-track");
    return el ? getComputedStyle(el).transform : null;
  });
  console.log("carousel moved:", pos1 !== pos2, pos1, pos2);

  // Hover pause test (force, since the element is mid-animation and never "stable")
  await page.hover(".cert-carousel-slide", { force: true });
  const posHover1 = await page.evaluate(() => getComputedStyle(document.querySelector(".cert-carousel-track")).transform);
  await page.waitForTimeout(800);
  const posHover2 = await page.evaluate(() => getComputedStyle(document.querySelector(".cert-carousel-track")).transform);
  console.log("paused on hover (should be true/same):", posHover1 === posHover2);

  // Click a slide -> lightbox opens
  await page.click(".cert-carousel-slide", { force: true });
  await page.waitForTimeout(300);
  const lightboxOpen = await page.evaluate(() => document.querySelector(".certificate-preview.is-open") !== null);
  console.log("lightbox opened on carousel click:", lightboxOpen);
  await page.screenshot({ path: "C:\\Users\\USER\\AppData\\Local\\Temp\\claude\\e--Portfolio\\2462d803-9195-481d-9af9-5ab983a19e3e\\scratchpad\\home-lightbox-light.png" });
  await page.keyboard.press("Escape");

  // "View All Certificates" CTA -> navigates to /certificates
  await page.click("a.btn.btn-primary[href='/certificates']", { force: true });
  await page.waitForLoadState("networkidle");
  console.log("navigated to:", page.url());
  await page.screenshot({ path: "C:\\Users\\USER\\AppData\\Local\\Temp\\claude\\e--Portfolio\\2462d803-9195-481d-9af9-5ab983a19e3e\\scratchpad\\certificates-page-light.png", fullPage: true });

  const gridCount = await page.evaluate(() => document.querySelectorAll(".certificates-grid-full .certificate-card").length);
  console.log("certificates grid count:", gridCount);

  // Click a card in the grid -> lightbox
  await page.click(".certificate-card img");
  await page.waitForTimeout(300);
  const gridLightboxOpen = await page.evaluate(() => document.querySelector(".certificate-preview.is-open") !== null);
  console.log("lightbox opened on grid click:", gridLightboxOpen);
  await page.keyboard.press("Escape");

  // Dark mode persistence check on certificates page
  await page.selectOption("#theme-select", "dark");
  await page.waitForTimeout(200);
  await page.reload({ waitUntil: "commit" });
  const themeEarly = await page.evaluate(() => document.documentElement.getAttribute("data-theme"));
  await page.waitForLoadState("networkidle");
  const themeLate = await page.evaluate(() => document.documentElement.getAttribute("data-theme"));
  console.log("certificates page theme early/late after reload:", themeEarly, themeLate);
  await page.screenshot({ path: "C:\\Users\\USER\\AppData\\Local\\Temp\\claude\\e--Portfolio\\2462d803-9195-481d-9af9-5ab983a19e3e\\scratchpad\\certificates-page-dark.png", fullPage: true });

  // Back to home, confirm dark persists and carousel still works in dark
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.evaluate(() => document.querySelector("#certificates")?.scrollIntoView());
  await page.waitForTimeout(300);
  await page.screenshot({ path: "C:\\Users\\USER\\AppData\\Local\\Temp\\claude\\e--Portfolio\\2462d803-9195-481d-9af9-5ab983a19e3e\\scratchpad\\home-carousel-dark.png" });

  console.log("console/page errors:", JSON.stringify(errors));

  await browser.close();
})();
