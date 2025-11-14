// function printobj <T extends object>(data : T){
//     console.log(data);
// }

// printobj({name :"asnif",age:22})
// printobj({name:"ssalman" ,age : 18})

function printname<T extends {name : string}>(users:T){
    console.log("Name :",users.name );
    
}

printname({name:"anshif"})