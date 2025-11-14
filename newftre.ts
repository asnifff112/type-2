{let arr = 10
    arr = 20
 console.log(arr);
 
}

// arrow function

const add = (a:number,b:number) => a+b;

// Template Literals

const namee ="asnif";

console.log(`hello , ${namee} welcome back`);

//Destructuring (Objects & Arrays)

let user = {you:"asnif",age:18};
let {you ,age} = user;

let newnum = [2000,3000,4000];
let[a,b,c] = newnum

// Spread Operator

let aam = [1,2,3];
let bbm = [...aam,5,6];
console.log(bbm);

//Rest Parameter 

function sumss(...numss : number[]) {
    return numss.reduce((a,b) => a+b);
}

console.log(sumss(2,3));

// Default Parameters

function greeet (name : string = "asnif"){
    console.log(`hello${name}`);
    
}

//



