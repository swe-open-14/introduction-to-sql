const fs = require("node:fs");
const path = require("node:path");

const sql = (filename) =>
  fs
    .readFileSync(
      path.resolve(
        "./src",
        path.basename(path.dirname(filename)),
        [path.basename(filename, ".test.js"), "sql"].join(".")
      )
    )
    .toString();

module.exports = (filename) => ({ sql: sql(filename) });
