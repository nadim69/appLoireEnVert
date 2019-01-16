<<<<<<< HEAD
const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
port: "8889",
user :  'root', // le nom d'utilisateur
password :  'root', // le mot de passe
database :  'Loire_en_Vert', // le nom de la base de données
=======

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost", // adresse du serveur
  user: "root", // le nom d'utilisateur
  password: "*****", // le mot de passe
  database: "Loire_en_Vert" // le nom de la base de données
>>>>>>> 959f2b3778d20c55719a93d7e712b2d2d4036021
});
module.exports = connection;
