const fs = require("fs");
const path = require("path");


const file = (filename) => path.join(__dirname, "files",filename);

const lorem2 = fs.readFileSync(file("lorem1.txt"));



console.log(lorem1.toString());
