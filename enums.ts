enum OrderStatus {
    Pending = "PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED"
}

type Order = {
    id : number,
    customer: string,
    status : OrderStatus
}

const order1:Order = {id :1, customer:"asnif", status:OrderStatus.Cancelled}

if (order1.status === OrderStatus.Delivered){
    console.log("order is delevered thank you");
    
}else if( order1.status === OrderStatus.Pending){
        console.log("your order is pending ");  
}else if (order1.status === OrderStatus.Cancelled){
    console.log("your order cancelled");
}else if (order1.status === OrderStatus.Shipped){
    console.log("your oeder shipped");
    
}
   
