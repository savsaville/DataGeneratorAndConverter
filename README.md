## Installation  
  ````  
 $ npm init
 $ npm install synaptic --save
( $ npm install request cheerio --save  )
 $npm install json2csv --save
 ````  
## Create JSON & CSV dummy data  
  In create.js file, Setup the JSON keys which you want to create and create either JSON & CSV format by following command.
  ````  
  create.js
    
  //generate the data  
  for (var i = 0; i < DATA_SIZE; i++) {  
    let age = rand(10, 40);  
    let itemA = rand(1, 10);  
    let itemB = rand(1, 5);  
    let itemC = rand(10, 20);  
    let pageA = rand(10, 20);  
    let pageB = rand(5, 10);  
    let pageC = rand(1, 10);  
    let totalPp = rand(1000, 3000);  
    let f = {  
        'age': age,  
        'itemA': itemA,   
        'itemB': itemB,  
        'itemC': itemC,  
        'pageA': pageA,  
        'pageB': pageB,  
        'pageC': pageC,  
        'totalPp': totalPp  
    };  
    data.push(f);  
  }  
  ````  
  ````  
  json2csv.js  
    
  var json2csv = require('json2csv');  
  var fs = require('fs');  
  var json = require("./user_data.json");  
  
  json2csv({data: json, fields: ["age","itemA","itemB","itemC", "pageA", "pageB", "pageC", "totalPp"]}, function(err, csv) {  
   if (err) console.log(err);  
   fs.writeFile('result.csv', csv, function(err) {  
    if (err) throw err;  
     console.log('Good Work! JSON format converted into CSV format');  
   });  
  });    
  ````  
  ````    
  $ node create.js  
  $ node json2csv.js  
  ````  
  
   
  
  