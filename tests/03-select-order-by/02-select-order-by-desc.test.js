const { sql } = require("../prelude.js")(__filename);
const { Database } = require("sqlite3");

describe("03-select-order-by", () => {
  describe("02-select-order-by-desc.sql", () => {
    /** @type {Database} */
    let db;

    beforeAll((done) => {
      db = new Database(":memory:", done);
    });

    beforeEach((done) => {
      db.exec(
        `
      CREATE TABLE people (
        id INTEGER PRIMARY KEY ASC,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) DEFAULT NULL
      );
      INSERT INTO people (first_name, last_name, email)
      VALUES
        ("Olive", "Rudd", "alice@example.com"),
        ("Alf", "Brockwell", NULL),
        ("Olive", "Oyl", NULL);
      `,
        done
      );
    });

    afterAll((done) => {
      db.close(done);
    });

    afterEach((done) => {
      db.exec(`DROP TABLE people`, done);
    });

    it("returns a resultset with 3 rows", (done) => {
      db.all(sql, (err, rows) => {
        if (err) throw err;

        expect(rows.length).toBe(3);
      }).wait(done);
    });

    it("returns only records with `first_name` and `last_name` columns", (done) => {
      db.all(sql, (err, rows) => {
        if (err) throw err;

        expect(
          rows.every((row) => {
            const keys = Object.keys(row);

            expect(keys.length).toBe(2);
            expect(keys).toContain("first_name");
            expect(keys).toContain("last_name");

            return true;
          })
        ).toBe(true);
      }).wait(done);
    });

    it("returns the expected records", (done) => {
      db.all(sql, (err, rows) => {
        if (err) throw err;

        expect(rows[0]).toMatchObject({
          first_name: "Olive",
          last_name: "Rudd",
        });

        expect(rows[1]).toMatchObject({
          first_name: "Olive",
          last_name: "Oyl",
        });

        expect(rows[2]).toMatchObject({
          first_name: "Alf",
          last_name: "Brockwell",
        });
      }).wait(done);
    });
  });
});
