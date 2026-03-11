const fibonacci = function(num) {
    if (!+num) return +num;
    if (+num < 0) return "OOPS";
    
    let result = 1;
    let previous = 1;
    let placeholder;
    for (let i = 2; i < +num; i++) {
        placeholder = result;
        result += previous;
        previous = placeholder;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
