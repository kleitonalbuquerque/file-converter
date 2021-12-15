var Reader = require("./Reader");

var read = new Reader();

async function main() {
  var data = await read.Read("./users.csv");
  // var dataConvertToJSON = JSON.parse(data);

  console.log(data);
}

main();
