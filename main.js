const repl = require("repl");
const utils = require("./app/utils");
const eval = require("./app/interpreter");


repl.start({
    prompt: "> ",
    eval: function(cmd, context, filename, callback) {
        const parse = utils.parseInput(cmd);
        const run = eval.interpret(parse);
        callback(null, run);
    }
});
