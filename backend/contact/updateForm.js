var express = require('express');
var app = express();
const mysql = require('mysql2/promise');

app.post('/updateForm', function(req, res) {
  const userName = req.body.user_name;
  const userEmail = req.body.user_email;

  // Insérer les données dans la base de données
  db.execute(`
    INSERT INTO utilisateurs (nom, email)
    VALUES (?, ?)
  `, [userName, userEmail])
  .then(() => {
    res.send(`Données insérées avec succès ! ${userName} is ${userEmail} `);
  })
  .catch(err => {
    res.status(500).send(`Erreur lors de l'insertion des données : ${err}`);
  });
});


/*
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
const db = require('./db');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'formulaire.html'));
});

app.post('/display', function(req, res) {
  const userName = req.body.user_name;
  const userEmail = req.body.user_email;

  // Insérer les données dans la base de données
  db.execute(`
    INSERT INTO utilisateurs (nom, email)
    VALUES (?, ?)
  `, [userName, userEmail])
  .then(() => {
    res.send(`Données insérées avec succès ! ${userName} is ${userEmail} `);
  })
  .catch(err => {
    res.status(500).send(`Erreur lors de l'insertion des données : ${err}`);
  });
});

app.listen(8888);
*/