function Environment(params = [], args= [], _parent) {
    const parent = _parent || {};
    const env = {};

    if (params.length !== 0){
        params.forEach((el, index) =>{
            env[el] = args[index];
        });
    }

    env.find = function(variable){
        if (variable in env)
            return env;
        else
            return parent.find(variable);
    };

    env['+'] = function(a, b)  {return a + b;};
    env['-'] = function(a, b)  {return a - b;};
    env['*'] = function(a, b)  {return a * b;};
    env['/'] = function(a, b)  {return a / b;};
    env['>'] = function(a, b)  {return a > b;};
    env['<'] = function(a, b)  {return a < b;};
    env['>='] = function(a, b) {return a >= b;};
    env['<='] = function(a, b) {return a <= b;};
    env['=='] = function(a, b) {return a == b;};
    env['rem'] = function(a, b) {return a % b;};
    env['equal?'] = function(a, b) {return a == b;};
    env['eq?'] = function(a, b) {return a == b;};
    env['not'] = function(a, b) {return !a;};
    env['length'] = function(a, b) {return a.length;};
    env['cons'] = function(a, b) {return a.concat(b);};
    env['car'] = function(a, b) {return (a.length !== 0) ? a[0] : null;};
    env['cdr'] = function(a, b) {return (a.length > 1) ? a.slice(1) : null;};
    env['append'] = function(a, b) {return a.concat(b);};
    env['list'] = function() {return Array.prototype.slice.call(arguments);};
    env['list?'] = function(a) {return (a instanceof Array);};
    env['null?'] = function(a) {return (a.length == 0);};
    env['symbol?'] = function(a) {return (typeof a == 'string');};

    return env;
};

module.exports = Environment;




