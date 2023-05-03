const { Database } = require("sqlite3");
const { sql } = require("../prelude.js")(__filename);

describe("01-select-list", () => {
  describe("03-string-list.sql", () => {
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

    it("returns record with strings in each column", (done) => {
      db.all(sql, (err, rows) => {
        if (err) throw err;

        expect(rows[0]['"one"']).toBe("one");
        expect(rows[0]['"two"']).toBe("two");
        expect(rows[0]['"three"']).toBe("three");
      }).wait(done);
    });
  });
});
