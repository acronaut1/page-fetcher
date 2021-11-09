const fs = require('fs');
const request = require('request');

// const content = 'Some test-content!'
// const folderName = './test'

// try {if (!fs.existsSync(folderName)) {fs.mkdirSync(folderName)}
// } catch (err) {console.error(err)};

// fs.writeFile('./test/test.txt', content, { flag: 'a+' }, err => {
//   if (err) {console.error(err); return;}
//   console.log('File Written Successfully!');
// });

let Request = process.argv[2]; 
let filePath = process.argv[3];
request(Request, (err, response, body) => { // [200 = OK]
  if (response && response.statusCode === 200) {
    fs.writeFile(filePath, body, (err) => { 
      fs.stat(filePath, (err, stats) => {
        if (!err) {console.log(`Downloaded and saved ${stats.size} bytes to ${filePath}!`);
        } 
      });
    });
  }  
}); 
