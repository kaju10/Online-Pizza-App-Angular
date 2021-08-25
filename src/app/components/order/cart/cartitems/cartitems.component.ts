import { Component, Input, OnInit } from '@angular/core';
import { PizzaOrder } from 'src/app/models/pizza-order';
import { Pizzasender } from 'src/app/models/pizzasender';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {

  @Input() cartPizza : PizzaOrder;

  pizzaSender: Pizzasender;

  constructor(private msg: MessengerService) { }

  onClickToAdd(){
    this.pizzaSender.pizza= this.cartPizza.pizza;
    this.pizzaSender.checker= 1;
    this.msg.sendPizzaToCartUsingButton(this.pizzaSender);
  }

  onClickToRemove(){
    this.pizzaSender.pizza= this.cartPizza.pizza;
    this.pizzaSender.checker= 2;
    this.msg.sendPizzaToCartUsingButton(this.pizzaSender);
    
  }

  ngOnInit(): void {
  }

  

}
