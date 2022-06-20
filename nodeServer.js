// same as import in java
const http = require('http');

console.log("Hello from node server!");

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('<h1>Node server webpage</h1>'+
    '<p>Welcome to the node server </p>'+
    '<img src=\'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg\'>');
})

server.listen(8000, '127.0.0.1');
