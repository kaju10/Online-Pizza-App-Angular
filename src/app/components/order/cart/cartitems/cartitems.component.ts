import { Component, Input, OnInit } from '@angular/core';
import { PizzaOrder } from 'src/app/models/pizza-order';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {

  @Input() cartPizza : PizzaOrder;

  constructor(private msg: MessengerService) { }

  onClickToAdd(){
    this.msg.sendPizzaToCart(this.cartPizza.pizza);
  }

  onClickToRemove(){
    this.msg.removePizzaFromCart(this.cartPizza.pizza);
  }

  ngOnInit(): void {
  }

  

}
