import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon';
import { Customer } from 'src/app/models/customer';
import { Order } from 'src/app/models/order';
import { PizzaOrder } from 'src/app/models/pizza-order';
import { MessengerService } from 'src/app/services/messenger.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orderplacedconfirmation',
  templateUrl: './orderplacedconfirmation.component.html',
  styleUrls: ['./orderplacedconfirmation.component.css']
})
export class OrderplacedconfirmationComponent implements OnInit {

  constructor(private mssngrservice: MessengerService, private orderservice: OrderService, private route: Router) { }

  pizzaOrders: PizzaOrder[]=[];
  // order: Order= new Order(0,"", "","", this.pizzaOrders, new Customer(0,"", "", "", "", "", ""),new Coupon(0, "", 0, ""), 0, 0);
  order: Order= new Order();
  orderId: number=0;
  mobile: number=0;

  onClickReturnToOrder(){
    this.mobile= this.order.customer.mobile;
    this.mssngrservice.sendMobileNumber(this.mobile);
    this.route.navigate(['/order']);

  }

  ngOnInit(): void {
    
    this.orderId=this.mssngrservice.getOrderIdToOrderPlaced();
    this.orderservice.viewOrderById(this.orderId).subscribe( data => {
      this.order= data;
      console.log(this.order);
    });
    
    
    // this.order.coupon.couponId=0;
    // this.order.coupon.couponDescription="";
    // this.order.coupon.couponName="";
    // this.order.coupon.discountPercentage=0;
  }

}
