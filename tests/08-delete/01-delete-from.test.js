const { sql } = require("../prelude.js")(__filename);
const { Database } = require("sqlite3");

describe("06-insert-into", () => {
  describe("01-insert-into.sql", () => {
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
        `
      ).exec(sql, done);
    });

    afterAll((done) => {
      db.close(done);
    });

    afterEach((done) => {
      db.exec(`DROP TABLE people`, done);
    });

    it("deletes an existing record", (done) => {
      db.each(`SELECT id FROM people WHERE id = 3;`, (err, row) => {
        if (err) throw err;

        expect(row).toMatchObject({
          id: 3,
          email: null,
        });
      }).wait(done);
    });
  });
});
