let wr = (msg = '------') => console.log(`${msg}`)
const Recursion = (max, current) => {
    if (current > max) return;
    wr(current)
    Recursion(max, current + 1);
}

Recursion(5, 1);
