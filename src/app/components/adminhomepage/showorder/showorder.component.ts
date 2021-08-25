import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-showorder',
  templateUrl: './showorder.component.html',
  styleUrls: ['./showorder.component.css']
})
export class ShoworderComponent implements OnInit {

  constructor(private orderservice: OrderService) { }
  orders: Order[];

  ngOnInit(): void {
    this.orderservice.viewAllOrders().subscribe( data => this.orders = data);
  }

}
