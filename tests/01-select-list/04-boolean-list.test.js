const { Database } = require("sqlite3");
const { sql } = require("../prelude.js")(__filename);

describe("01-select-list", () => {
  describe("04-boolean-list.sql", () => {
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

    it("returns record with booleans in each column", (done) => {
      db.all(sql, (err, rows) => {
        if (err) throw err;

        expect(rows[0]["FALSE"]).toBeFalsy();
        expect(rows[0]["TRUE"]).toBeTruthy();
      }).wait(done);
    });
  });
});
