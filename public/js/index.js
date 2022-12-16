const txtNombre=document.querySelector("#txtNombre")
// const btnSaludar=document.querySelector("#btnSaludar")
// const txtMensaje=document.querySelector("#txtMensaje")
// const btnMensaje=document.querySelector("#btnMensaje")

const txtChat=document.querySelector("#txtChat")
const btnChat=document.querySelector("#btnChat")


var socket = io();
let chat=[]

socket.on('connect', function(){
    console.log("Conectado al servidor");
})

socket.on('disconnect', function(){
    console.log("Conexion perdida con el servidor");
})

socket.on('buenas', function(msg){
    console.log(`Este es el mensaje del servidor: ${msg}`);
})

socket.on('notificar', function(msg){
    console.log(msg);
})

socket.on('notificarChat', function(msg){
    console.log(msg);
    let mensaje = `${msg}`
    chat.push(mensaje)
    console.log(chat);
    for (let i = 0; i < chat.length; i++) {
        document.getElementById('chat').innerHTML = `${chat}`;
    }
})
// btnSaludar.addEventListener('click',()=>{
//     socket.emit('holaTodos',`Saludos de ${txtNombre.value}`,function(rtaServidor){
//         console.log(rtaServidor);
//     })
// })

btnChat.addEventListener('click',()=>{
    const today = new Date();
    const now = today.toLocaleString();
    let mensaje=`<li> ${now}/ ${txtNombre.value} / ${txtChat.value} </li>`
    socket.emit('nuevoMensaje',`<li>${now}/ ${txtNombre.value} / ${txtChat.value} </li>`,function(rtaServidor){
        chat.push(mensaje)
        document.getElementById('chat').innerHTML = `${chat}`;
        console.log(rtaServidor);
    })
})

// btnMensaje.addEventListener('click',()=>{
//     socket.emit('enviarMensaje',{
//         nombre:"Juan",
//         mensaje:`Saludos de ${txtMensaje.value}`
//     },function(resp){
//         console.log(`Esto es una respuesta del servidor ${resp.msg}`);
//     })
// });


