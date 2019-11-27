// Add your functions here
function map(values, fn) {
    let result = [];
    for (const value of values) {
        result.push(fn(value));
    }
    return result;
}

function reduce(values, fn, startingValue) {
    let result = (!!startingValue) ? startingValue : values[0]
    let i = (!!startingValue) ? 0 : 1

    for (; i < values.length; i++) {
        result = fn(values[i], result)
    }

    return result;
}