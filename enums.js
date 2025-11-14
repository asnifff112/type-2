var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
    OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
var order1 = { id: 1, customer: "asnif", status: OrderStatus.Cancelled };
if (order1.status === OrderStatus.Delivered) {
    console.log("order is delevered thank you");
}
else if (order1.status === OrderStatus.Pending) {
    console.log("your order is pending ");
}
else if (order1.status === OrderStatus.Cancelled) {
    console.log("your order cancelled");
}
else if (order1.status === OrderStatus.Shipped) {
    console.log("your oeder shipped");
}
