const express = require('express')
const server = express()
const {getCharById} = require('./rutas/getCharById')


server.get('/rickandmorty/character/:id', getCharById)

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json())

server.listen(3001, () => {
    console.log('server corriendo en puerto 3001')
})
