import { Component, Input, OnInit } from '@angular/core';
import { PizzaOrder } from 'src/app/models/pizza-order';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {

  @Input() cartPizza : PizzaOrder;

  constructor() { }

  ngOnInit(): void {
  }

  

}
