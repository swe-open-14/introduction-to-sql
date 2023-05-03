const { sql } = require("../prelude.js")(__filename);
const { Database } = require("sqlite3");

describe("02-select", () => {
  describe("04-select-where-like.sql", () => {
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
        ("Alf", "Brockwell", NULL);
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

    it("returns a resultset with 1 row", (done) => {
      db.all(sql, (err, rows) => {
        if (err) throw err;

        expect(rows.length).toBe(1);
      }).wait(done);
    });

    it("returns only records with `email` column", (done) => {
      db.all(sql, (err, rows) => {
        if (err) throw err;

        expect(
          rows.every((row) => {
            const keys = Object.keys(row);

            expect(keys.length).toBe(1);
            expect(keys).toContain("email");

            return true;
          })
        ).toBe(true);
      }).wait(done);
    });

    it("returns the expected records", (done) => {
      db.all(sql, (err, rows) => {
        if (err) throw err;

        expect(rows[0]).toMatchObject({
          email: "alice@example.com",
        });
      }).wait(done);
    });
  });
});
