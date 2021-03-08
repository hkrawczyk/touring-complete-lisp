# LISP INTERPRETER IN JS

As I'm not familiar with LISP and did not really have time to go through its documentation, I've went through few articles about it. Overall implementation may be not appropriate, yet this task looks to be more focused on touring-complete machine rather than real programing or LISP per se. 

## ToDo:
- add rest of the basic operators (mod, read, evaluate etc.)
- add _while_
- add input validator
- add multithreading to make it touring-complete (even setTimeout to avoid app freeze)


## REQUIREMENTS FOR TOURING COMPLETE

What makes the language touring-complete.

- infinite memory (tape)
- basic methods (+, - , *, / ...)
- can run forever (while, goto, for, ifs or recursion)
- support of anonymous and named functions
- random access memory

## IMPLEMENTED FUNCTIONS
- basic operators - to make it functional
- if - conditions and loops
- quote - passing literary written argument
- set - saving variables (infinite tape)
- define - setting variables (infinite tape)
- lambda - anonymous functions

Therefore, assuming the requirements, current state of app + todo's would results it almost touring-complete language.

## RUN
`npm install`
`node main.js`