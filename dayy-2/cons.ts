function printobj <T extends object>(data : T){
    console.log(data);
}

printobj({name :"asnif",age:22})
printobj({name:"ssalman" ,age : 18})

//-----------------------------------------------------------------------------------------

function printname<T extends {name : string}>(users:T){
    console.log("Name :",users.name );
    
}

printname({name:"anshif"})

//------------------------------------------------------------------------

function doubleValue <T extends number | string>(valuee : T){
    return valuee;
}

console.log(doubleValue(1000));

console.log(doubleValue("asnif"));
