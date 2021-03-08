exports.parseInput = (input) => {
    return buildArrays(splitInput(input));
};

const splitInput = (input) => {
    return input.replace(/\(/g, " ( ")
            .replace(/\)/g, " ) ")
            .trim()
            .split(/\s+/);

};

const buildArrays = (input) => {
    const token = input.shift();
    if (token == '('){
        let array = [];
        while (input[0] !== ')')
            array.push(buildArrays(input));
        input.shift();
        return array;
    } else {
        if (isNaN(token))
            return token;
        else
            return parseFloat(token);
    }
};
