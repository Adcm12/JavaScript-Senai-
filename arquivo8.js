const EventEmitter = require('node:events');

class MiEmisor extends EventEmitter {}

const miEmisor = new MiEmisor();

miEmisor.on('saludo', (nombre) => {
    console.log(`¡Hola, ${nombre}!`);
});

miEmisor.emit('saludo', 'Juan');
miEmisor.emit('saludo', 'María');