import fs from "fs";
import path from "path";
import http from "http";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, "../dist");

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
};

const server = http.createServer((req, res) => {
  let filePath = path.join(DIST_DIR, req.url === "/" ? "index.html" : req.url.split("?")[0]);
  
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(DIST_DIR, "index.html");
  } else if (!fs.existsSync(filePath)) {
    filePath = path.join(DIST_DIR, "index.html");
  }

  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end("Error loading file");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(0, async () => {
  const PORT = server.address().port;
  console.log(`Prerender server running on port ${PORT}`);

  try {
    const browser = await puppeteer.launch({
      headless: "shell",
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const routes = [
      "/",
      "/about",
      "/services",
      "/products",
      "/why-us",
      "/projects",
      "/contact"
    ];

    for (const route of routes) {
      console.log(`Prerendering route: ${route}`);
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 800 });

      // Navigate to route
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle0",
        timeout: 30000
      });

      // Allow react rendering scripts to fully execute
      await new Promise(resolve => setTimeout(resolve, 2000));

      const html = await page.content();
      await page.close();

      if (route === "/") {
        fs.writeFileSync(path.join(DIST_DIR, "index.html"), html);
      } else {
        const routeDir = path.join(DIST_DIR, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        fs.writeFileSync(path.join(routeDir, "index.html"), html);
      }
      console.log(`Successfully prerendered: ${route}`);
    }

    await browser.close();
    console.log("Static pre-rendering complete.");
  } catch (error) {
    console.error("Error during prerendering:", error);
  } finally {
    server.close();
    console.log("Server closed.");
    process.exit(0);
  }
});
