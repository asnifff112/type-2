type pendingOrder = {
    status:"pending"; // discriminator
    estimatedDays : number;
};

type shippedOrder = {
    status:"shipped";
    trakkingid:string;
};

type deliveredOrder = {
    status:"delivered";
    deliveredOnn:Date;
};

type cancelledOrder = {
    status : "cancelled";
    reason : string
}
// combain all discriminated union
type Orderdetail = pendingOrder | shippedOrder | deliveredOrder | cancelledOrder ;
// function using discriminated union 
function handleOrderss(Orderdetail:Orderdetail) {
    switch(Orderdetail.status){
     case "pending":
        console.log("your order is pending .it may arrive in" ,Orderdetail.estimatedDays,"days");
        break;
     case "shipped":
        console.log("your order is shipped! Track here:",Orderdetail.trakkingid );
        break;
     case "delivered":
        console.log("your order is delivered on:",Orderdetail.deliveredOnn);
        break;
     case "cancelled":
        console.log("order was cancelled because:" , Orderdetail.reason);
        break;
    }
}


let order11: shippedOrder={
    status: "shipped",
    trakkingid:"ASII1394"
}

handleOrderss(order11)