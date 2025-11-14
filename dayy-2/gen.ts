function getFirst<T>(items: T[]):T[] {
     return items.slice(0, 3)
}

let n = getFirst([10,20,30]);
let s = getFirst(["asi","loo","bro"]);

console.log(n);
console.log(s);

