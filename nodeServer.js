const http = require('http');
// Fs giives access to this computers filesystem
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('A request was made to', req.url);

    if (req.url === '/') {

        res.writeHead(200, {
            'content-type': 'text/html'
        });

        const homePageHTML =fs.readFileSync('node.html');

        res.write(homePageHTML);

        res.end();

    } else if (req.url === '/img-eye.png') {

        res.writeHead(200, {
            'Content-type' : 'image/png'
        });

        const image = fs.readFileSync('img-eye.png');

        res.write(image);

        res.end();
    } else {

        res.writeHead(404, {'Content-type' : 'text/html'});

        const errorPageHTML = fs.readFileSync('error.html');

        res.write(errorPageHTML);

        res.end();

    }
    
})

server.listen(3000);