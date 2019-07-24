//Convert CSV file to JSON 
const csvtojsonV2=require("csvtojson/v2");
const fs=require('fs');

// Path provided is relatiive
const csvFilePath='./customer-data.csv'


// // Async Await

// async function convert(csvFilePath) {
// const jsonArray=await csvtojsonV2().fromFile(csvFilePath);
// const content = JSON.stringify(jsonArray);
// fs.writeFile('customer-data.json', content,(err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });    
// }



// Promises

function convert(filepath) {
    csvtojsonV2().fromFile(filepath)
    .then((jsonObj)=>{
        const content = JSON.stringify(jsonObj);
        fs.writeFile('customer-data.json', content,(err) => {         
            if (err) throw err;
           console.log('The file has been saved!');
         });    
    })   
}

convert(csvFilePath);

//* make sure file does not already exists with the same name