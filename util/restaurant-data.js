const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname,'..','data','restaurant.json');

function getStoredRestaurants() {

const fileData = fs.readFileSync(filePath);
const storedRestaurants = JSON.parse(fileData);

return getStoredRestaurants;
}

function storedRestaurants(storableRestaurants) {
    fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}

module.exports = {
    getStoredRestaurants: getStoredRestaurants,
    storedRestaurant: storedRestaurants
};