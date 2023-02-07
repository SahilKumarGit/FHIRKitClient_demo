const { default: consoleHijacker } = require('console-hijacker')

/**
 * NOTE:
 *      Don't Use console.log(), console.warn(), console.info(), and/or console.error() inside the consoleHijacker function
 * 
 * WHY?
 *      if you use any of these console(s) inside this consoleHijacker function 
 *      then it run as a loop and through an error of call stack overflow!
 */

consoleHijacker({
    Log: (data) => {
        // function call when console.log() trigger
   },
    Warn: (data) => {
        // function call when console.warn() trigger
    },
    Info: (data) => {
        // function call when console.info() trigger
    },
    Error: (data) => {
        // function call when console.error() trigger
    },
});