const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome Home");
    res.end();
  }
  if (req.url === "/about") {
    res.write("About Page");
    res.end();
  }
  //   res.write(
  //     `<h1>Oops!!!</h1>
  //     <div>Page not found</div>
  //     `
  //   );
  //   res.end();
  res.end("Page not found");
});

server.listen(5000);
