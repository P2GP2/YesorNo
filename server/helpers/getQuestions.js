const fs = require("fs");

module.exports = (path) => {
  let data = fs.readFileSync(path, "utf-8");
  data = JSON.parse(data);
  return data.sort(() => 0.5 - Math.random());
};
