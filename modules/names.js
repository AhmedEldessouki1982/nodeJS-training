//local
const secret = "this super secret variable"
//shared
// module.exports.ahmed = "eldessouki"; //we can add this variable inside exports object by this way
const ahmed = "eldessouki";
const nona = "noren";
const toty = "jory";

const cars= {
    name: "nissan",
    model: "2012"
}

module.exports = {ahmed, nona, toty}; //adding the variables inside exports object using es6 destructing way
module.exports.ahmedsCar = cars.name;

