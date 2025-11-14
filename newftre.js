var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
{
    var arr = 10;
    arr = 20;
    console.log(arr);
}
// arrow function
var add = function (a, b) { return a + b; };
// Template Literals
var namee = "asnif";
console.log("hello , ".concat(namee, " welcome back"));
//Destructuring (Objects & Arrays)
var user = { you: "asnif", age: 18 };
var you = user.you, age = user.age;
var newnum = [2000, 3000, 4000];
var a = newnum[0], b = newnum[1], c = newnum[2];
// Spread Operator
var aam = [1, 2, 3];
var bbm = __spreadArray(__spreadArray([], aam, true), [5, 6], false);
console.log(bbm);
//Rest Parameter 
function sumss() {
    var numss = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numss[_i] = arguments[_i];
    }
    return numss.reduce(function (a, b) { return a + b; });
}
console.log(sumss(2, 3));
// Default Parameters
function greeet(name) {
    if (name === void 0) { name = "asnif"; }
    console.log("hello".concat(name));
}
//
