const os = require("os");

const user = os.userInfo();

const osInfo = {
  name: os.type(),
  release: os.release(),
};

console.log(osInfo);