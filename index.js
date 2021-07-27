const http = require('http')
const { type } = require('os')

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application ld/json; charset=utf8',
    })
    switch(req.url){
        case '/':
            return res.end('<h1> This is the home page</h1>');
        case '/about':
            return res.end('<h1> This is the about</h1>');
        case '/product':
            return res.end('<h1> This is the product page</h1>');
        default:
            return res.end(`<h1> The page ${req.url.toLowerCase().replace(/\/| -/g, '')} doesn't exist</h1>`);
    }
    res.end('{"code":200, "message": "Server running on port 3000"}')
}).listen(3000, 'localhost', () => console.log('Server running on port 3000'))