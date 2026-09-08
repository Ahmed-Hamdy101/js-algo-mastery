let wr = (msg = '------') => console.log(`${msg}`)
const fibonacci = (n) => {
    // so this where we won't zero inputs
    if (n <= 2) return 1;
    // this where repeating function for n and excute what inside function
    else return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i <= 20; i++) {
    wr(`${i}.${fibonacci(i)}`);
}
