let fs = require('fs');

let data = {
    name: "AHMED",
    AGE: "40"
};

fs.writeFile('./dataInput.json', JSON.stringify(data), (err) => {
if (err) throw err;
console.log('The file has been saved!');
});