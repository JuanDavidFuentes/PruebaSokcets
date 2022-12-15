const socketController=(socket)=>{
    console.log(socket.id);
    socket.broadcast.emit('notificar',`Nuevo usuario ${socket.id}`)  
    
    socket.on('enviarMensaje',function(usuario,callback){
        console.log(usuario.nombre);
        console.log(usuario.mensaje);
        callback({
            msg:"Usuario inertado en la bd",
            usuario
        })
        
    })

    socket.on('holaTodos',function(msg,callback){
        console.log(msg);
        socket.broadcast.emit('notificar',msg)
        callback("Mensajes enviados")// mensaje para todos u este colback es para saber si lo amnde
    })
}

export default socketController