const http = require("http");

const server = http.createServer((request, response) => {
    console.log("Se ha recibido una petición");
    if (request.url == "/home") {
        response.write("<h1>Página inicial</h1>");
    } else {
        response.write("<h1>Página no encontrada</h1>");
    }
    response.end();
});

server.listen(3000);