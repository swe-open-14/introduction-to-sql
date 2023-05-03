const { Database } = require("sqlite3");
const { sql } = require("../prelude.js")(__filename);

describe("01-select-list", () => {
  describe("01-hello-world.sql", () => {
    /** @type {Database} */
    let db;

    beforeAll((done) => {
      db = new Database(":memory:", done);
    });

    afterAll((done) => {
      db.close(done);
    });

    it("returns a resultset with a single row", (done) => {
      db.all(sql, (err, rows) => {
        if (err) throw err;

        expect(rows.length).toBe(1);
      }).wait(done);
    });

    it("returns a record with a `message` column", (done) => {
      db.all(sql, (err, rows) => {
        if (err) throw err;

        expect(rows[0]).toHaveProperty("message");
      }).wait(done);
    });

    it("returns a record with a greeting in the message column", (done) => {
      db.all(sql, (err, rows) => {
        if (err) throw err;

        expect(rows[0]["message"]).toBe("Hello, World!");
      }).wait(done);
    });
  });
});
