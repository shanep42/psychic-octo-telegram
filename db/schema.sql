-- Active: 1664495737510@@127.0.0.1@3306@company_db

DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE
    departments (
        id INT AUTO_INCREMENT,
        name VARCHAR(30),
        PRIMARY KEY (id)
    );

CREATE TABLE
    roles (
        id INT AUTO_INCREMENT,
        title VARCHAR(30),
        salary DECIMAL,
        department_id INT,
        PRIMARY KEY (id),
        FOREIGN KEY (department_id) REFERENCES departments(id)
    );

CREATE TABLE
    employees (
        id INT AUTO_INCREMENT,
        first_name VARCHAR(30),
        last_name VARCHAR(30),
        role_id INT,
        manager_id INT,
        PRIMARY KEY (id),
        FOREIGN KEY (role_id) REFERENCES roles(id),
        FOREIGN KEY (manager_id) REFERENCES employees(id)
    );

-- TODO: I've created foreign keys: how do I make the associated first and last names from employees shouw instead of employees.id (for example)?