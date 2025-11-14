// function printobj <T extends object>(data : T){
//     console.log(data);
// }
// printobj({name :"asnif",age:22})
// printobj({name:"ssalman" ,age : 18})
function printname(users) {
    console.log("Name :", users.name);
}
printname({ name: "anshif", age: 20 });
