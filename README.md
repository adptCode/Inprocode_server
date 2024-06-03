# Overview

This project is a backend application built using Node.js, Sequelize ORM, and MySQL database, written in TypeScript.
The purpose of this application is to provide a robust and scalable backend for managing and interacting with data in a MySQL database.

# Features

- Node.js for the server environment
- Sequelize ORM for database management
- MySQL as the database
- TypeScript for type safety and modern JavaScript features
- Nodemon for automatically restarting the server during development

# Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- MySQL (version 5.7 or higher)

  # Getting Started
  ## Installation
  ### Clone the repository:

  git clone https://github.com/adptCode/server
  cd server

  ### Install dependencies:

  npm install

  ### Database

  In your mySQladmin create a database 'calcioapp', then import the calcioapp.sql file

  ### Running the Application

  nodemon dist/index.js
