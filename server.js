const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    /* index */
    if (req.method === "GET" && req.url === "/") {

        fs.readFile("index.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error loading index.html");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });

    }

    /* about */
    else if (req.method === "GET" && req.url === "/about") {

        fs.readFile("about.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error loading about.html");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });

    }

    /* Courses*/
    else if (req.method === "GET" && req.url === "/courses") {

        fs.readFile("courses.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error loading courses.html");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });

    }

    /* Contactus */
    else if (req.method === "GET" && req.url === "/contactus") {

        fs.readFile("contactus.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error loading contactus.html");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });

    }

    else if (req.method === "POST" && req.url === "/contact") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            console.log("Form Data:", body);

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Thank You! Your response has been submitted successfully.</h1>");
        });

    }

    /* Page not found*/
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});