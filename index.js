const _ = require('lodash');

const numbers = [33, 45, 25, 15, 855, 95];

_.each(numbers, function(number, i) {
    console.log(number);
});