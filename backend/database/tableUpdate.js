const pool = require('./db');

// Ajouter une nouvelle table à la base de données existante
pool.execute(`

  CREATE TABLE IF NOT EXISTS form (
  id INT AUTO_INCREMENT,
  nom VARCHAR(50),
  email VARCHAR(100),
  PRIMARY KEY (id)
);
`)
  .then(() => {
    console.log('Table  créée avec succès !');
  })
  .catch(err => {
    console.error(err);
  });