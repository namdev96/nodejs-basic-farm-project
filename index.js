console.log("hello");
const http = require("http");
const fs = require("fs");
// const data = fs.readFileSync("./farm-data/data.json"); //1st way of reading data
const data = fs.readFileSync(`${__dirname}/farm-data/data.json`, "utf-8"); //second way of reading data //reading data syncronously so that file read work done ony for once to prevent everytime read data

console.log(JSON.parse(data));

//SERVER
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is a Overview.");
  } else if (pathName === "/product") {
    res.end("This is a Product.");
  } else if (pathName === "/api") {
    res.end(data); //because we send string not object
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("'<h1>Page not found</h1>");
  }
});
//listen server

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on port 8000");
});
