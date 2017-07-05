//generate data for Wine tasting
const DATA_SIZE = 5000
const data = []

//generate the data
for (var i = 0; i < DATA_SIZE; i++) {
    let acidity = rand(1, 100);
    let clarity = rand(1, 100);
    let afterTaste = rand(1, 100);
    let price = rand(1, 100);
    let taste = rand(1, 100)
    let f = {
        'acidity': acidity,
        'clarity': clarity,
        'afterTaste': afterTaste,
        'price': price,
        'taste': taste
    };
    data.push(f);
}

//store the data into the file
data_json = JSON.stringify(data);
const fs = require('fs');
fs.writeFileSync("user_data.json", data_json);
console.log("Success!! JSON dummy data created");


//generate arbitrary scope of random number
function rand(n, m) {
    let range = m - n + 1;
    return Math.floor(Math.random() * range + n)
}