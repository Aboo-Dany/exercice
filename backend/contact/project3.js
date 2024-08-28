var express = require('express');
var app = express();
var path = require('path');
const mysql = require('mysql2/promise');

// Définition du port du serveur
const port = 8888;

// Connexion au serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.render('formulaire');
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/display', function(req, res) {
  // Redirect to updateForm.js
  res.redirect('/updateForm');
});









/*// Premier code mis à jour
var express = require('express');
var app = express();
var path = require('path');
const mysql = require('mysql2/promise');

// Définition du port du serveur
const port = 8888;

// Connexion au serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.render('formulaire');
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/display', function(req, res) {
  // Forward the request to the second code
  var request = require('request');
  var options = {
    method: 'POST',
    uri: 'http://localhost:8888/updateForm.js',
    form: req.body
  };
  request(options, function(error, response, body) {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(body);
    }
  });
});

*/



/*

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Configuration de bodyParser pour parser les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));

// Configuration de EJS pour afficher les fichiers ejs
app.set('view engine', 'ejs');
app.set('views', './views'); // Indiquez le chemin vers le dossier views

// Route pour afficher le formulaire
app.get('views/contact.html', (req, res) => {
  res.render('contact');
});

// Route pour traiter les données du formulaire après soumission
app.post('views/contact.html', (req, res) => {
  // Récupération des données du formulaire
  const { userName, userMail } = req.body;

  // Analyse des données du formulaire
  console.log(`Nom : ${userName}`);
  console.log(`Email : ${userMail}`);

  // Envoi d'une réponse au client
  res.send(`Merci pour votre soumission !`);
});

// Démarrage du serveur
const port = 8080;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

*/