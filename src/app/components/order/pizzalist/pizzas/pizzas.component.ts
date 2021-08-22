import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { MessengerService } from 'src/app/services/messenger.service';


@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  
  @Input() pizza: Pizza;

  
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  onClickAddToCart(){
    this.msg.sendPizzaToCart(this.pizza);
  }

}
