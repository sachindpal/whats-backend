var commonSocket = {};

module.exports = chat = (io) => {
    console.log('jjjjjjjjjjj')
    io.on("connection", (socket) => {
        commonSocket = socket;
        
        socket.on('join', function (data) {
            console.log('joined',data.id)
            socket.join(data.id); // We are using room of socket io
          });

          socket.on('send_msg',(data)=>{
            console.log('mil gya',data.to)
            io.sockets.in(data.to).emit('new_msg', data.data);
            // socket.broadcast.to(data.to).emit('new_msg', data.data);
          })
    });
}

