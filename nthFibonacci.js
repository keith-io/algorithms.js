// takes a number (n) and returns the nth number of the fibonacci sequence

function fib(n) {
    if (n === 1 || n === 2) {
        return 1;
    } else {
        return fib(n-1) + fib(n-2);
    }
}
