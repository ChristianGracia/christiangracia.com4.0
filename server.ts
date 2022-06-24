import "zone.js/dist/zone-node";

import * as express from "express";
import { join } from "path";

const app = express();

const PORT = process.env.PORT || 80;
const DIST_FOLDER = join(process.cwd(), "dist/browser");

const {
  AppServerModuleNgFactory,
  ngExpressEngine,
} = require("./dist/server/main");

app.engine(
  "html",
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [],
  })
);

app.set("view engine", "html");
app.set("views", DIST_FOLDER);

app.get(
  "*.*",
  express.static(DIST_FOLDER, {
    maxAge: "1y",
  })
);

app.get("*", (req, res) => {
  res.render("index", { req });
  logRequest(req, res);
});

app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.ENV}`);
});

function logRequest(req, res) {
  let host = req.client._peername.address.split(":").pop();
  let method = req.method;
  let url = req.url;
  let userAgent = req.headers["user-agent"];
  let dt = new Date();
  let statusCode = res.statusCode;
  let HTTPVersion = req.httpVersion;
  let referrer = req.headers.referrer || req.headers.referer || "-";

  console.log(
    `${host} - - [${dt.toISOString()}] "${method} ${url} HTTP/${HTTPVersion}" ${statusCode} "${referrer}" "${userAgent}"`
  );
}
