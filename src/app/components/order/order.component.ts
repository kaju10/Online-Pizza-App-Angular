import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first, take } from 'rxjs/operators';
import { Coupon } from 'src/app/models/coupon';
import { Customer } from 'src/app/models/customer';
import { Order } from 'src/app/models/order';
import { PizzaOrder } from 'src/app/models/pizza-order';
import { CouponService } from 'src/app/services/coupon.service';
import { CustomerService } from 'src/app/services/customer.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {

  constructor(private couponservice: CouponService, private orderservice: OrderService, private mssngerservice: MessengerService, private customerservice: CustomerService, private route: Router) {
    // this.response= this.mssngerservice.getMobileNumber().subscribe( data=> this.realCustomerMobileNumber=data);
  }
  
  

  toPrice: number;
  fromPrice: number;

  orderSubscription : Subscription;
  response: Subscription;

  //goToCheckoutButtonToggle:boolean= false;
  realCustomerMobileNumber: number;
  realCustomer: Customer = new Customer(0, "", "", "", "", "", "");

  appliedCoupon:Coupon;
  //dummyCustomer: Customer= new Customer(8876543210, "xyz@69", "xyz72def", "customer", "xyz", "xyz@gmail.com", "Pune");
  dummyDate: string= "2021-08-22";
  orderResponse: Order= new Order();

  orderedPizzas: PizzaOrder[]=[];
  couponList: Coupon[]=[];
  finalOrder: Order = new Order();

  cartTotal: number = 0;
  costAfterCoupon: number = 0;
  totalSaved: number = 0;

  receivedData1(value: number){
    this.fromPrice=value;
  }

  receivedData2(value: number){
    this.toPrice=value;
  }



  receivedCartItemsToOrder(cartItems: PizzaOrder[]){
    console.log(cartItems)
    this.orderedPizzas=cartItems;
  }

  createOrder(){
    this.finalOrder.orderType= "Online";
    this.finalOrder.orderDescription= "Add Oregano";
    this.finalOrder.customer= this.realCustomer;
    this.finalOrder.orderDate= this.dummyDate;
    this.finalOrder.orderList= this.orderedPizzas;
    this.finalOrder.coupon= this.appliedCoupon;
    console.log(this.finalOrder); 
  }


  
  onClickApply(){
    for(let i of this.couponList){
      if(i.couponId==this.applyCouponForm.controls['selectedCoupon'].value)
      this.appliedCoupon=i;
    }
    console.log(this.appliedCoupon);
    this.createOrder();
    this.finalOrder.orderList.forEach(i => {this.cartTotal+= (i.pizza.pizzaCost*i.quantity)});
    this.costAfterCoupon = this.cartTotal - (this.cartTotal*(this.appliedCoupon.discountPercentage)/100);
    this.totalSaved = this.cartTotal - this.costAfterCoupon;
  }

  applyCouponForm = new FormGroup({
    selectedCoupon: new FormControl(3)
  });


  onClickToPlaceOrder(){
    this.orderSubscription=this.orderservice.bookOrder(this.finalOrder).subscribe(data=> {
      this.orderResponse=data;
      this.mssngerservice.sendOrderIdToOrderPlaced(this.orderResponse.orderId);
      this.route.navigate(['/orderplacedconfirmation']);
    });
  }

 


  ngOnInit(): void {
    this.couponservice.getAllCoupons().subscribe( data => this.couponList = data );
    //this.response.unsubscribe();
    this.realCustomerMobileNumber= this.mssngerservice.getMobileNumber();
    console.log(this.realCustomerMobileNumber);

    this.customerservice.getCustomerById(this.realCustomerMobileNumber).subscribe(data=>this.realCustomer=data);
    console.log(this.realCustomer); 
  }

  // onClickReturnToOrder(){
  //   this.route.navigate(['/order']);
  //   this.ngOnInit();
  // }

  ngOnDestroy(){
    if(this.orderSubscription){
      this.orderSubscription.unsubscribe();
    }
    console.log(this.orderResponse);

    // this.response.unsubscribe();
    // console.log(this.realCustomerMobileNumber);

    

  }

}
