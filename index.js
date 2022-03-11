const {leerInput} = require('./helpers/inquirer');
// Server Model: Contiene todo el servidor de express + socket.io configurado
const Server = require('./models/server');

// Paquete para leer y establecer las variables de entorno
require('dotenv').config();

const main = async() => {
  let opt

  do {
    opt = await inquirerMenu()
    console.log({opt})
  } while (opt !== 0)
}


// Inicializar la instancia del server
const server = new Server();

// Ejecutar el server
server.execute();


