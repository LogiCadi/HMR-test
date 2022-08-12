const http = require("http");
const fs = require("fs");
const url = require("url");
const { Server } = require("socket.io");
const chokidar = require("chokidar");

const server = http.createServer(function (request, response) {
  // 读取文件
  const filePath = url.parse(request.url, true).pathname.slice(1);
  if (fs.existsSync(filePath)) {
    const [, fileType] = filePath.split(".");
    const file = fs.readFileSync(filePath);
    response.writeHead(200, { "Content-Type": "text/" + fileType });
    response.end(file);
  }
});

const io = new Server(server);

// 监听文件改变
chokidar.watch(".").on("all", (event, path) => {
  // 通知客户端
  io.emit("changed", path);
});

server.listen(8001);

// 终端打印如下信息
console.log("Server running at http://127.0.0.1:8001/");
