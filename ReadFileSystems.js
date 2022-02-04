let fs = require ('fs');
// can use require to retrive json file
// data1 = require ('./dataExampe.json');
// console.log(data1);

fs.readFile('./dataExampe.json','utf-8', (error,data) => {
    let theData = JSON.parse(data);
    console.log(theData);
    console.log(error);
});