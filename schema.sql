DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price INT(10) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("apple", "fruits", 1, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("watermelon", "fruits", 1, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bratwurst", "meats", 3, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sirloin", "meats", 5, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bacon", "meats", 4, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("milk", "dairy", 2, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("egg", "dairy", 1, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ramen", "asain", 1, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sriracha", "asiain", 2, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lettuce", "veggies", 1, 8);



