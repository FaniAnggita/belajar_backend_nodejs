var moment = require('moment');
var salam = require("./salam");

console.log("Sekarang: " + moment().format('D MMMM Y h:mm'));
console.log(salam.salam());