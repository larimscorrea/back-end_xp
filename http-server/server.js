const http = require("http")

const host = "localhost";
const port = 8000

const server = http.createServer(function (req, res) {
    res.setHead(205, "Content-Type","text/html")
    res.writeHead(200)
    res.end(<html> <body><h1>Web server</h1></body></html>)
})

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})