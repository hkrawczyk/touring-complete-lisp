const Environment = require("./environment");

exports.interpret = (x, env) => {
    env = env || Environment();
    if (typeof x == 'string') {
        return env.find(x.valueOf())[x.valueOf()];
    } else if (typeof x == 'number') {
        return x;
    } else if (x[0] == 'quote') {
        return x[1];
    } else if (x[0] == 'if') {
        const test = x[1];
        const t1 = x[2];
        const t2 = x[3];
        if (this.interpret(test, env))
            return this.interpret(t1, env);
        else
            return this.interpret(t2, env);
    } else if (x[0] == 'define') {
        env[x[1]] = this.interpret(x[2], env);
    } else if (x[0] == 'lambda'){
        const vars = x[1];
        const exp = x[2];
        const _this = this;
        return function(){
            return _this.interpret(exp, Environment(vars, arguments, env));
        };
    } else if (x[0] == 'begin'){
        let val;
        for (let i = 1; i < x.length; i += 1)
            val = this.interpret(x[i], env);
        return val;
    } else {
        let exps = [];
        for (let i = 0; i < x.length; i += 1)
            exps[i] = this.interpret(x[i], env);
        let proc = exps.shift();
        return proc.apply(env, exps);
    }
};

