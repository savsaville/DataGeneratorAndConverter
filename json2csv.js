var json2csv = require('json2csv');
var fs = require('fs');
var json = require("./user_data.json");

json2csv({
    data: json,
    fields: [
        'acidity',
        'clarity',
        'afterTaste',
        'price',
        'taste'
    ]
}, function(err, csv) {
    if (err) console.log(err);
    fs.writeFile('user_data.csv', csv, function(err) {
        if (err) throw err;
        console.log('Success!! JSON format converted into CSV format');
    });
});