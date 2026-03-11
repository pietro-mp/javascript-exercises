const findTheOldest = function(arr) {
    return arr.reduce((accumulator, current) => {
        const currentAge = (current.yearOfDeath ? current.yearOfDeath : 2026) - current.yearOfBirth;
        const accumulatorAge = (accumulator.yearOfDeath ? accumulator.yearOfDeath : 2026) - accumulator.yearOfBirth;
        return currentAge > accumulatorAge ? current : accumulator;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
