//modules
// every file js is module (by default)

const namesData = require('./modules/names');
const sayHi = require('./utils');


sayHi (namesData.ahmed);
sayHi (namesData.nona);
sayHi (namesData.toty);

sayHi (namesData.ahmedsCar); // this coming from the cars object on names module