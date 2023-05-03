const { Database } = require("sqlite3");
const { sql } = require("../prelude.js")(__filename);

describe("05-create-table", () => {
  describe("01-create-table.sql", () => {
    /** @type {Database} */
    let db;

    beforeAll((done) => {
      db = new Database(":memory:", done);
    });

    beforeEach((done) => {
      db.exec(sql, done);
    });

    afterAll((done) => {
      db.close(done);
    });

    afterEach((done) => {
      db.exec(`DROP TABLE people;`, done);
    });

    it("creates the `people` table", (done) => {
      db.each(
        "SELECT sql FROM sqlite_schema WHERE name = 'people';",
        (err, { sql }) => {
          if (err) throw err;

          expect(sql).toMatch(/CREATE TABLE ['"]?people['"]?/);
          expect(sql).toMatch(/id INTEGER/);
        }
      ).wait(done);
    });

    it("creates the `people` table with an `id` column", (done) => {
      db.each(
        "SELECT sql FROM sqlite_schema WHERE name = 'people';",
        (err, { sql }) => {
          if (err) throw err;

          expect(sql).toMatch(/['"]?id['"]? .*INTEGER/);
          expect(sql).toMatch(/['"]?id['"]? .*PRIMARY KEY/);
        }
      ).wait(done);
    });

    it("creates the `people` table with a `first_name` column", (done) => {
      db.each(
        "SELECT sql FROM sqlite_schema WHERE name = 'people';",
        (err, { sql }) => {
          if (err) throw err;

          expect(sql).toMatch(/['"]?first_name['"]? .*VARCHAR\(255\)/);
          expect(sql).toMatch(/['"]?first_name['"]? .*NOT NULL/);
        }
      ).wait(done);
    });

    it("creates the `people` table with a `last_name` column", (done) => {
      db.each(
        "SELECT sql FROM sqlite_schema WHERE name = 'people';",
        (err, { sql }) => {
          if (err) throw err;

          expect(sql).toMatch(/['"]?last_name['"]? .*VARCHAR\(255\)/);
          expect(sql).toMatch(/['"]?last_name['"]? .*NOT NULL/);
        }
      ).wait(done);
    });

    it("creates the `people` table with a `email` column", (done) => {
      db.each(
        "SELECT sql FROM sqlite_schema WHERE name = 'people';",
        (err, { sql }) => {
          if (err) throw err;

          expect(sql).toMatch(/['"]?email['"]? .*VARCHAR\(255\)/);
        }
      ).wait(done);
    });
  });
});
