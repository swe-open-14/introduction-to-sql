const { sql } = require("../prelude.js")(__filename);
const { Database } = require("sqlite3");

describe("07-update", () => {
  describe("01-update.sql", () => {
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
        `
      ).exec(sql, done);
    });

    afterAll((done) => {
      db.close(done);
    });

    afterEach((done) => {
      db.exec(`DROP TABLE people`, done);
    });

    it("inserts a new record", (done) => {
      db.each(
        `SELECT id, first_name, last_name, email FROM people WHERE id = 1;`,
        (err, row) => {
          if (err) throw err;

          expect(row).toMatchObject({
            id: 1,
            first_name: "Olive",
            last_name: "Brockwell",
            email: "alice@example.com",
          });
        }
      ).wait(done);
    });
  });
});
