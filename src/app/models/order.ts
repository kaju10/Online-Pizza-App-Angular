import { Coupon } from "./coupon";
import { Customer } from "./customer";
import { PizzaOrder } from "./pizza-order";

export class Order {
    orderId: number;
    orderList: PizzaOrder[];
    customer: Customer;
    orderDate: string;
    orderType: string;
    orderDescription: string;
    coupon: Coupon;
    totalCost: number;
    costAfterCoupon: number;

    constructor(){}

    // constructor(orderId: number, orderType: string, orderDescription: string, orderDate: string, orderList: PizzaOrder[], customer: Customer, coupon: Coupon, totalCost: number, costAfterCoupon: number){
    //     this.orderId= orderId;
    //     this.orderType=orderType
    //     this.orderDescription=orderDescription;
    //     this.orderDate= orderDate;
    //     this.orderList=orderList;
    //     this.customer= customer;
    //     this.coupon= coupon;
    //     this.totalCost = totalCost;
    //     this.costAfterCoupon = costAfterCoupon;
    // }
}
