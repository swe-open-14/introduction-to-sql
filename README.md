# Introduction to SQL

## Structured Query Language

SQL (Structured Query Language) is a special purpose programming language used to manage and manipulate relational databases. It is used to insert, update, and query data in a database. SQL was developed in the 1970s by IBM researcher Donald D. Chamberlin and Raymond F. Boyce. The first version of SQL was called SEQUEL, which stood for "Structured English Query Language". It was later changed to SQL because SEQUEL was already trademarked by another company. SQL is now an industry standard and is used by many relational database management systems (RDBMS) such as MySQL, Oracle, and Microsoft SQL Server.

SQL allows users to add, modify, and retrieve data in a structured and organized way, making it easy to manage large amounts of data. Some of the main features of SQL include the ability to:

- Create, alter, and delete databases and tables
- Insert, update, and delete data in a table
- Retrieve specific data from one or more tables using a `SELECT` statement
- Join multiple tables together to retrieve data from them in a single query
- Create and use indexes to optimize the performance of queries
- Create and manage users and permissions to control access to the data in the database.

SQL is widely used in many industries such as finance, retail, healthcare and many more for data analysis, reporting and decision making.

## SQL Commands

The most frequently used SQL commands include:

- `SELECT` - retrieves data from one or more tables in a database. It is the most commonly used command in SQL, and is used to retrieve specific columns and rows from a table or multiple tables.
- `INSERT` - adds new data to a table. This command is used to insert new rows of data into a table.
- `UPDATE` - modifies existing data in a table. This command is used to change the values of certain columns in a row or multiple rows.
- `DELETE` - removes data from a table. This command is used to delete specific rows or all rows from a table.

These are the most basic and frequently used SQL commands that allow you to manage and manipulate data in a relational database. There are many other SQL commands available, but the above commands are the ones that are most commonly used in most SQL applications.

### SELECT Command

The purpose of the `SELECT` command in SQL is to retrieve data from one or more tables in a relational database. It is used to query the database and return specific columns and rows from a table or multiple tables based on certain conditions. The `SELECT` command is the most commonly used command in SQL, and is used to retrieve data for various purposes such as data analysis, reporting, and decision making.

When you use the `SELECT` command, you specify the columns you want to retrieve and the table(s) from which to retrieve them. You can use the `WHERE` clause to filter the rows in the result set based on specific conditions, the ORDER BY clause to sort the result set by one or more columns, and the `JOIN` clause to combine rows from multiple tables based on a related column.

The `SELECT` command allows you to retrieve data from a database in a structured and organized way, making it easy to manage large amounts of data. It is a powerful tool for retrieving data from a relational database, and is used in many different industries and applications.

Here is an example of using the `SELECT` command to retrieve data from a table called `employees`:

```sql
SELECT first_name, last_name, salary
FROM employees;
```

This query retrieves the first name (`first_name`), last name (`last_name`), and salary (`salary`) columns from the `employees` table and returns the result set.

You can also use a `WHERE` clause to filter the rows in the result set based on a specific condition:

```sql
SELECT first_name, last_name, salary
FROM employees
WHERE salary > 50000;
```

This query retrieves the `first_name`, `last_name`, and `salary` columns from the `employees` table where the `salary` is greater than `50000` and returns the result set.

You can also order the result set using the `ORDER BY` clause:

```sql
SELECT first_name, last_name, salary
FROM employees
WHERE salary > 50000
ORDER BY last_name;
```

This query retrieves the `first_name`, `last_name`, and `salary` columns from the `employees` table where the salary is greater than `50000`, and returns the result set ordered by `last_name`. By default, `ORDER BY` orders records in ascending order.

You can also join multiple tables using the `JOIN` clause:

```sql
SELECT e.first_name, e.last_name, e.salary, d.department_name
FROM employees e /* use `e` as and alias for `employees` */
JOIN departments d /* use `d` as an alias for `departments` */
ON e.department_id = d.department_id;
```

This query retrieves the `first_name`, `last_name`, `salary` and department name (`department_name`) from the `employees` and `departments` tables where the `department_id` of `employees` table matches with `department_id` of `departments` table and returns the result set.

These are just a few examples of how the `SELECT` command can be used to retrieve data from a table. The `SELECT` command is very powerful and versatile, and there are many other options and clauses that can be used to retrieve data in different ways.

### INSERT Command

The purpose of the `INSERT` command in SQL is to add new data to a table in a relational database. It is used to insert new rows of data into a table, and is typically used when new data needs to be added to the database.

The basic syntax of the `INSERT` command is as follows:

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

Here, you specify the table name, and the columns and values for the new row.

For example, the following query would insert a new row into the employees table with values for the `first_name`, `last_name` and `salary` columns:

```sql
INSERT INTO employees (first_name, last_name, salary)
VALUES ('John', 'Doe', 70000);
```

You can also insert data from a `SELECT` statement into a table

```sql
INSERT INTO target_table (column1, column2, column3)
SELECT columnA, columnB, columnC
FROM source_table;
```

The `INSERT` command is an important tool for adding new data to a database and keeping it up to date. It can be used to add new data to a table in response to new business requirements, or to update the data in a table in response to changes in the data. It is also used to load data from external sources, such as text files or other databases, into a table.

### UPDATE Command

The purpose of the `UPDATE` command in SQL is to modify the existing data in a table in a relational database. It is used to update one or more columns of existing rows in a table, based on specific conditions. The `UPDATE` command allows you to change the data in a table, making it an important tool for maintaining the accuracy and consistency of the data in the database.

The basic syntax of the `UPDATE` command is as follows:

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE some_column = some_value;
```

Here, you specify the table name and the columns and new values to set. You also use the `WHERE` clause to specify which rows to update by providing a condition.

For example, the following query would update the salary of all employees with the last name 'Smith' to `75000`:

```sql
UPDATE employees
SET salary = 75000
WHERE last_name = 'Smith';
```

You can also use the `UPDATE` command to update multiple tables at once, using the `JOIN` clause, for example:

```sql
UPDATE employees e
JOIN departments d ON e.department_id = d.department_id
SET e.salary = e.salary \* 1.1, d.budget = d.budget + 10000
WHERE e.department_id = 3;
```

This query increase the `salary` of employees where the `department_id` equals `3` by 10% (`* 1.1`) and also increase the `budget` of departments where the `department_id` equals `3` by `10000`.

It's important to use the `WHERE` clause to specify the conditions for the update, otherwise all rows in the table will be updated, which can lead to unintended consequences.

In summary, the `UPDATE` command is an important tool for maintaining the data in a database by modifying existing data in a table based on specific conditions. It is widely used to update data in response to changing business requirements or to correct errors or inconsistencies in the data.

### DELETE Command

The purpose of the `DELETE` command in SQL is to remove existing data from a table in a relational database. It is used to delete one or more rows of data from a table, based on specific conditions. The DE`LETE command allows you to remove unwanted data from a table, making it an important tool for maintaining the accuracy and consistency of the data in the database.

The basic syntax of the `DELETE` command is as follows:

```sql
DELETE FROM table_name
WHERE some_column = some_value;
```

Here, you specify the table name and use the `WHERE` clause to specify which rows to delete by providing a condition.

For example, the following query would delete all rows from the employees table where the `department_id` is `2`:

```sql
DELETE FROM employees
WHERE department_id = 2;
```

It's important to use the `WHERE` clause to specify the conditions for the deletion, otherwise all rows in the table will be deleted, which can lead to unintended consequences.

You can also use the `DELETE` command to delete data from multiple tables at once, using the `JOIN` clause. For example:

```sql
DELETE e, d
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE e.department_id = 3;
```

This query deletes all employees and departments where `department_id` equals `3`.

In summary, the `DELETE` command is an important tool for maintaining the data in a database by removing unwanted data from a table based on specific conditions. It is widely used to delete data that is no longer needed, such as old records or data that has been duplicated. It is also used to delete data in response to changing business requirements or to correct errors or inconsistencies in the data.

## Data Definition Langauge

Data Definition Language (DLL) is a subset of SQL that is used to define the structure of a database, including creating, altering, and dropping tables, constraints, indexes, and other database objects.

Some examples of SQL DDL commands include:

- `CREATE TABLE`: creates a new table in the database
- `ALTER TABLE`: modifies the structure of an existing table
- `DROP TABLE`: deletes an existing table and all of its data
- `CREATE INDEX`: creates an index on one or more columns of a table
- `DROP INDEX`: removes an index from a table

These commands are used to define the structure of a database and are executed at the beginning of a project or when an update of the structure is required.

It is important to note that DDL statements are executed immediately and permanently change the schema and structure of the database. For this reason, it is generally a good idea to test DDL statements on a separate, test database before executing them on a production database.

DDL commands are usually executed by Database Administrators or Developers with the appropriate access rights.

In summary, SQL DDL is a subset of SQL that is used to define the structure of a database, including creating, altering, and dropping tables, constraints, indexes, and other database objects. It is important to note that DDL statements are executed immediately and permanently change the schema and structure of the database and it is executed by the person who have the appropriate access rights.

### CREATE TABLE Command

The purpose of the `CREATE TABLE` command in SQL is to create a new table in a relational database. It is used to define the structure of a table, including the names, data types, and constraints of the columns, as well as any indexes or keys that are required to efficiently access the data in the table.

The basic syntax of the `CREATE TABLE` command is as follows:

```sql
CREATE TABLE table_name (
  column1 data_type constraint,
  column2 data_type constraint,
  ...
  constraint1,
  constraint2,
  ...
);
```

Here, you specify the name of the new table, followed by the names and data types of the columns in the table, enclosed in parentheses. Each column can also have optional constraints, such as `NOT NULL`, `UNIQUE`, `PRIMARY KEY`, and `FOREIGN KEY`.

```sql
CREATE TABLE departments (
  department_id INT PRIMARY KEY,
  department_name VARCHAR(255),
  budget DECIMAL(10,2)
);
```

This creates a table named "departments" with the following columns:

- `department_id` which is the primary key
- `department_name` and `budget` are columns of `VARCHAR` and `DECIMAL` datatype respectively.

The following query creates a table named "employees" with columns for employee ID, first name, last name, department ID, and salary:

```sql
CREATE TABLE employees (
  employee_id INTEGER PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  department_id INTEGER,
  salary DECIMAL(10,2),
  FOREIGN KEY (department_id) REFERENCES departments(department_id)
);
```

In this example, the `employee_id` column is defined as an `INTEGER` data type and is also defined as the primary key, which means that it must contain a unique value for each row in the table and cannot be null. The `first_name` and `last_name` column are defined as `VARCHAR` data type, and are also defined as `NOT NULL` which means that it should not contain any null value.

You can also see that the `employees` table has a foreign key constraint on the `department_id` column, which references the `department_id` column in the `departments` table. This establishes a relationship between the two tables, which can be used in `JOIN` operations in SQL.

Here, the employees table has a one to many relationship with the departments table. One department can have multiple employees.

Please note that the above schema is just an example and the actual schema for a real-world database would likely include more tables and columns, and would likely have more complex relationships between tables. But the above example shows the basic structure of the tables used in the examples.

In summary, the `CREATE TABLE` command is used to create a new table in a relational database and define its structure, including the names, data types, and constraints of the columns. It is the first step in creating a new database and is used to establish the foundation for storing and managing data in a relational database.

### ALTER TABLE Command

The `ALTER TABLE` command in SQL is used to modify the structure of an existing table in a relational database. It can be used to add, modify, or delete columns, constraints, and indexes in a table.

The basic syntax of the `ALTER TABLE` command is as follows:

```sql
ALTER TABLE table_name
  ADD column_name data_type constraint,
  MODIFY column_name data_type constraint,
  DROP column_name,
  ADD constraint_name constraint_type (column_name),
  DROP constraint_name;
```

- `ADD`: is used to add new columns to an existing table, or add constraints like primary key, foreign key and unique to an existing table.
- `MODIFY`: is used to alter the properties of an existing column in a table.
- `DROP`: is used to delete an existing column from a table or remove contraings from and existing table.

For example, the following query adds a new column "address" to the existing `employees` table:

```sql
ALTER TABLE employees
ADD address VARCHAR(255);
```

Another example, the following query modifies the data type of the `salary` column from `DECIMAL` to `INTEGER` in the `employees` table:

```sql
ALTER TABLE employees
MODIFY salary INTEGER;
```

In summary, the `ALTER TABLE` command in SQL is used to modify the structure of an existing table in a relational database. It can be used to add, modify, or delete columns, constraints, and indexes in a table. This command is useful when the requirements of the database change and the structure needs to be updated to accommodate new data or new relationships between tables.

### DROP TABLE Command

The `DROP TABLE` command in SQL is used to delete an existing table and all of its data from a relational database. The basic syntax of the `DROP TABLE` command is as follows:

```sql
DROP TABLE table_name;
```

For example, the following query will delete the `employees` table and all of its data:

```sql
DROP TABLE employees;
```

It is important to note that once a table is dropped, all of its data is permanently deleted and cannot be recovered. Therefore, it's highly recommended to take a backup of the table before executing the `DROP TABLE` command.

Additionally, when you drop a table, all the dependent objects such as indexes, constraints and triggers also get deleted. Therefore, you need to be careful and make sure that you have a plan in place to handle the deletion of these objects.

This command is usually used by Database Administrators or Developers with the appropriate access rights, and it is generally used when a table is no longer needed or when a table needs to be deleted as part of a larger database restructuring.

In summary, the `DROP TABLE` command in SQL is used to delete an existing table and all of its data from a relational database. It is important to note that once a table is dropped, all of its data is permanently deleted and cannot be recovered. Therefore, it's highly recommended to take a backup of the table before executing the `DROP TABLE` command. Additionally, when you drop a table, all the dependent objects such as indexes, constraints and triggers also get deleted. This command is usually used by Database Administrators or Developers with the appropriate access rights.

### CREATE INDEX Command

The `CREATE INDEX` command in SQL is used to create an index on one or more columns of a table in a relational database. An index is a database object that improves the performance of `SELECT`, `UPDATE`, and `DELETE` statements by allowing the database to find and retrieve the required data pages more quickly.

The basic syntax of the `CREATE INDEX` command is as follows:

```sql
CREATE INDEX index_name
ON table_name (column1, column2, ...);
```

For example, the following query creates an index named `employee_name_idx` on the `name` column of the `employees` table:

```sql
CREATE INDEX employee_name_idx
ON employees (name);
```

You can also create a composite index which is an index on multiple columns. For example, the following query creates a composite index named `employee_name_dob_idx` on the `name` and `dob` columns of the `employees` table:

```sql
CREATE INDEX employee_name_dob_idx
ON employees (name, dob);
```

In summary, the `CREATE INDEX` command in SQL is used to create an index on one or more columns of a table in a relational database. An index is a database object that improves the performance of `SELECT`, `UPDATE`, and `DELETE` statements by allowing the database to find and retrieve the required data pages more quickly. It's important to note that, creating an index can slow down the performance of data modification statements such as `INSERT`, `UPDATE`, and `DELETE`, because the database engine must also update the index when the data in the table changes. Therefore, it's important to create indexes only on columns that are frequently used in `WHERE` clauses and `JOIN` conditions.

### DROP INDEX Command

The `DROP INDEX` command in SQL is used to delete an existing index from a table in a relational database. Once an index is dropped, the database can no longer use it to improve the performance of `SELECT`, `UPDATE`, and `DELETE` statements.

The basic syntax of the `DROP INDEX` command is as follows:

```sql
DROP INDEX index_name;
```

For example, the following query will delete the `employee_name_idx` index from the `employees` table:

```sql
DROP INDEX employee_name_idx;
```

In summary, the `DROP INDEX` command in SQL is used to delete an existing index from a table in a relational database. Once an index is dropped, the database can no longer use it to improve the performance of `SELECT`, `UPDATE`, and `DELETE` statements. It's important to note that, dropping an index can improve the performance of data modification statements such as `INSERT`, `UPDATE`, and `DELETE`, because the database engine doesn't have to update the index when the data in the table changes. However, it can slow down the performance of `SELECT`, `UPDATE`, and `DELETE` statements that use the columns covered by the index. Therefore, it's important to drop indexes only if they are not frequently used in `WHERE` clauses and `JOIN` conditions.
