const express = require("express");
const mysql = require("./config/connection");

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());