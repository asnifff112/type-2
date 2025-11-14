enum OrderStatuss {
    Pending = "PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED"
}

type Order = {
    id : number,
    customer: string,
    status : OrderStatuss
}

const order100:Order = {id :1, customer:"asnif", status:OrderStatuss.Cancelled}

if (order1.status === OrderStatuss.Delivered){
    console.log("order is delevered thank you");
    
}else if( order1.status === OrderStatuss.Pending){
        console.log("your order is pending ");  
}else if (order1.status === OrderStatuss.Cancelled){
    console.log("your order cancelled");
}else if (order1.status === OrderStatuss.Shipped){
    console.log("your oeder shipped");
    
}
   
