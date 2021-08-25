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

    constructor(){ };

    // constructor( orderDate: string, orderList: PizzaOrder[], customer: Customer, orderType: string, orderDescription: string, coupon: Coupon,){
        
    //     this.orderDate= orderDate;
    //     this.orderType=orderType
    //     this.orderDescription=orderDescription;
    //     this.customer= customer;
    //     this.orderList=orderList;
    //     this.coupon= coupon;
    // }
}
