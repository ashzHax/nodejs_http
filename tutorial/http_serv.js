const http = require("http");
const path = require("path");
const fs = require("fs");

const host = 'localhost';
const port = 8000;


const requestListener = function (req, res) {
    res.writeHead(200);
    fs.readFile(path.join(__dirname,'/test.html'), 'utf8', (err,data) => {
    	res.end(data);
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

