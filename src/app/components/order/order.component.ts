import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Coupon } from 'src/app/models/coupon';
import { Customer } from 'src/app/models/customer';
import { Order } from 'src/app/models/order';
import { PizzaOrder } from 'src/app/models/pizza-order';
import { CouponService } from 'src/app/services/coupon.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {

  constructor(private couponservice: CouponService, private orderservice: OrderService) { }

  toPrice: number;
  fromPrice: number;

  orderSubscription : Subscription;

  goToCheckoutButtonToggle:boolean= false;
  appliedCoupon:Coupon;
  dummyCustomer: Customer= new Customer(8876543210, "xyz@69", "xyz72def", "customer", "xyz", "xyz@gmail.com", "Pune");
  dummyDate: string= "2021-08-22";
  orderResponse: any;

  orderedPizzas: PizzaOrder[]=[];
  couponList: Coupon[]=[];
  finalOrder: Order = new Order();

  cartTotal: number;
  costAfterCoupon: number;
  totalSaved: number;

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


  
  onClickApply(){
    for(let i of this.couponList){
      if(i.couponId==this.applyCouponForm.controls['selectedCoupon'].value)
      this.appliedCoupon=i;
    }
    console.log(this.appliedCoupon);

  }

  applyCouponForm = new FormGroup({
    selectedCoupon: new FormControl(3)
  });


  onClickToPlaceOrder(){
    
    this.finalOrder.orderType= "Online";
    this.finalOrder.orderDescription= "Add Oregano";
    this.finalOrder.customer= this.dummyCustomer;
    this.finalOrder.orderDate= this.dummyDate;
    this.finalOrder.orderList= this.orderedPizzas;
    this.finalOrder.coupon= this.appliedCoupon;
    console.log(this.finalOrder); 

    this.orderSubscription=this.orderservice.bookOrder(this.finalOrder).subscribe(data=>this.orderResponse=data);
    

  }

 


  ngOnInit(): void {
    this.couponservice.getAllCoupons().subscribe( data => this.couponList = data );
  }

  ngOnDestroy(){
    if(this.orderSubscription){
      this.orderSubscription.unsubscribe();
    }

    console.log(this.orderResponse);
  }

}
