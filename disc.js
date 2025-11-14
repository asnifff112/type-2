function handleOrders(Orderdetail) {
    switch (Orderdetail.status) {
        case "pending":
            console.log("your order is pending .it may arrive in", Orderdetail.estimatedDays, "days");
            break;
        case "shipped":
            console.log("your order is shipped! Track here:", Orderdetail.trakkingid);
            break;
        case "delivered":
            console.log("your order is delivered on:", Orderdetail.deliveredOnn);
            break;
        case "cancelled":
            console.log("order was cancelled because:", Orderdetail.reason);
            break;
    }
}
var order101 = {
    status: "shipped",
    trakkingid: "ASII1394"
};
handleOrders(order101);
