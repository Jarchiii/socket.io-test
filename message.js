import io from 'socket.io-client';

var socket = io.connect('http://localhost:8080');
socket.on('message', function(message) {
    alert('Le serveur a un message pour vous : ' + message);
})
var button = document.querySelector("#poke")
function message(){
    socket.emit('message', 'Salut serveur, ça va ?');
}
console.log(button)
button.onclick = message