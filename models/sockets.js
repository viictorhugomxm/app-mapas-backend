const Marcadores = require('./marcadores');

class Sockets {

    constructor( io ) {

        this.io = io;

        this.marcadores = new Marcadores();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            socket.emit('marcadores-activos', this.marcadores.activos);

            socket.on('marcador-nuevo', (marcador) => {
                this.marcadores.agregarMarcador(marcador)
                sockets.broadcast.emit('nuevo-marca', marcador)
            })

            
            
        
        });
    }


}


module.exports = Sockets;