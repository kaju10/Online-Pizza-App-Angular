import { Component, OnInit, Input } from '@angular/core';
import { Pizzamodel } from 'src/app/models/pizzamodel';
import { MessengerService } from 'src/app/services/messenger.service';


@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  
  @Input() pizza: Pizzamodel;

  popOver(): String{
    return this.pizza.pizzaDescription;
  }
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  onClickAddToCart(){
    this.msg.sendMsg(this.pizza);
  }

}
