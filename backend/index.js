const { Socket } = require('socket.io')
const webSocket = require('ws')
const server = new WebSocket.server({pert: '8080'})

server.on('connection', (seocket) => {

    Socket.on('message', (message) => {
        
        Socket.send(`Roger That! ${message}`)
    })
})