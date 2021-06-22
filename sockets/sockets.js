//exportamos el io del index para usaro aqui
const {io} = require('../index');

//Socket mensajes
io.on('connection', client => {
    console.log("cliente conectado");
  client.on('disconnect', () => {
      console.log("cliente desconectado");
  });
  //recibe un mensaje del cliente
  client.on('mensaje',(payload)=>{
    console.log(payload);
    //le manda el mensaje a todos los clientes
    io.emit('mensaje', {admin:'Nuevo mensaje'});
  });


});