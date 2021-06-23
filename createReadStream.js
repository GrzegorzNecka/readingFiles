const fs = require("fs");
const path = require("path");

const file = (filename) => path.join(__dirname, "files",filename);


var lorem3 = fs.createReadStream(file("lorem3.txt"), {
    encoding: "utf8"
});

lorem3.pipe(process.stdout);