import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { MessengerService } from 'src/app/services/messenger.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-viewmyorders',
  templateUrl: './viewmyorders.component.html',
  styleUrls: ['./viewmyorders.component.css']
})
export class ViewmyordersComponent implements OnInit {

  constructor(private orderservice: OrderService, private mssngrservice: MessengerService) {
    
   }

  orderHistory: Order[];
  mobile: number;

  ngOnInit(): void {

    this.mobile= this.mssngrservice.getMobileNumber();
    this.orderservice.myOrders(this.mobile).subscribe( data => this.orderHistory = data );
    console.log(this.orderHistory);
  }

}
