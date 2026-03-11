const palindromes = function (str) {
    // nunca tinha escrito um código tão ilegível, pqp
    const reverse = str.split('').reverse().filter(value => /^[A-Za-z0-9]$/i.test(value)).join('');
    str = str.split('').filter(value => /^[A-Za-z0-9]$/i.test(value)).join('');
    console.log(`${str.toLowerCase()} === ${reverse.toLowerCase()}`);
    return reverse.toLowerCase() === str.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
