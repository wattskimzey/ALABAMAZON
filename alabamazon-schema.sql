CREATE DATABASE alabamazon;

USE CREATE DATABASE alabamazon;
;

CREATE TABLE products (
    item_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50),
    price DECIMAL(5,2) NOT NULL,
    stock_quantity INT NOT NULL
);

Select * From products;