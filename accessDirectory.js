let fs = require('fs');
//note that fs.readdir returns array of directory componants
fs.readdir('/home/eldessouki', (error,data) => {
    console.log(data);
});
