function getFirstt<T>(items: T[]):T[] {
     return items.slice(0, 3)
}

let m = getFirstt([10,20,30]);
let l = getFirstt(["asi","loo","bro"]);

console.log(m);
console.log(l);

