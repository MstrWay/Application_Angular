/*
Importer les dépendances
*/
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const frontRoute = require('./routes/front');
//

/*
Initialiser le serveur
*/
const app = express();
const port = process.env.PORT || 3000;
//

app.set( 'views', __dirname + '/www' );
app.use( express.static(path.join(__dirname, 'www')) );

/*
Lancer le serveur
*/
app.listen( port, () => console.log(`Le serveur est lancé sur le port ${port}`) );
//

app.use('/', frontRoute);
app.engine( 'html', ejs.renderFile );
app.set( 'view engine', 'html' );