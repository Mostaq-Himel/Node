// dependencies
const http = require('http');
const url = require('url');

// app object - module scuffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to ${app.config.port}`);
    });
};

// handle Request Response
app.handleReqRes = (req, res) => {
    console.log(req.method);
    res.end('Hellow World');
};

// start the server
app.createServer();
