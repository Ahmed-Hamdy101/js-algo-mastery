// Map and Set  object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
let G = new Map()
G.set("one", 1)
G.set("two", 2)
G.set("three", 3)
G.set("four", 3)
console.log(G)

let clean = new Set(G.values())
console.log(clean)
