
/** RUNNING SERVER USING DIRECTLY HTTP METHODS
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
**/

/**RUNNING SERVER USING EXPRESS */
const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res)=>{
//     res.send('<h1>Server running on port 3000 - Client-side msg</h1>')
// })

app.get('/', (req, res)=>{
    res.sendFile('views/index.html' , { root : __dirname})
})

app.listen(3000,()=> console.log('Server running on port 3000 - Terminal msg')) /**app.listen() recieves as parameters the port and a callback that excecutes when it creates the server */