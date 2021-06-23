const fs = require("fs");
const path = require("path");



const file = (filename) => path.join(__dirname, "files",filename);


fs.readFile(file("lorem1.txt"), "utf8", function(err, data) {

    if(err) {
        console.log(`Wystąpił błąd: ${err.message}.`);
        throw err;
    }

    console.log(data); 

});

// var lorem2 = fs.readFileSync(file("lorem2.txt"));

// console.log(lorem2.toString());
