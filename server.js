// The smallest static server that will do. No dependencies on purpose: an
// agent's box should be able to `npm start` this the moment it has cloned the
// repo, without a network round trip to a registry.
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT) || 8080;
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

http
  .createServer((req, res) => {
    const requested = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const relative = requested === "/" ? "index.html" : requested.replace(/^\/+/, "");
    const file = path.join(__dirname, relative);

    if (!file.startsWith(__dirname)) {
      res.writeHead(403).end("forbidden");
      return;
    }

    fs.readFile(file, (error, body) => {
      if (error) {
        res.writeHead(404, { "content-type": "text/plain" }).end("not found");
        return;
      }

      res.writeHead(200, { "content-type": types[path.extname(file)] || "application/octet-stream" });
      res.end(body);
    });
  })
  .listen(port, () => console.log(`testbed listening on http://localhost:${port}`));
