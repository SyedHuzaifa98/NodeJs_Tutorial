const http = require('http')
// req parameter contian multiple buntch of properties but we only need url
// res parametrer is responsible for sending response
// we use end method not write becasue end is similar to return after it execute it not execute further things
// we can use multiple time write it can run multiple times

const server = http.createServer((req, res) => {
    // res.write()
    if (req.url === "/") {
        res.end("Welcome to Our Home Page")
    } else if (req.url === "/about") {
        res.end("This is About page of our website")
    } else {
        res.end(`
            <h1>Page not found</h1>
            <a href="/">back to home</a>
        `)
    }
})


server.listen(5000, () => {
    console.log("Server is running on port 5000")
})
