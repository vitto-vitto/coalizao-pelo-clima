const http = require('http')

http.createServer((req, res) => {
    res.end('Server online on port 3000')
}).listen(3000, 'localhost', () => console.log('Server running on port 3000'))