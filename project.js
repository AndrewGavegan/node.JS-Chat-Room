// add packages //
const http = require('http');
const express = require('express');
const WebSocket = require('ws'); 
// making a port for server.listen //
const port = 4567;
const server = http.createServer(express);
// creating a new websocket, this is what the ws package is for //
const wss = new WebSocket.Server( { server })
// function for the connecting and data push and pull? of client data //
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming (data) {
        wss.clients.forEach(function each(client) {
            if (client != ws && client.readyState == WebSocket.OPEN) {
                client.send(data);
            }
        })
    })
})

server.listen(port, function() {
    console.log(`listening on ${port}!`)
})