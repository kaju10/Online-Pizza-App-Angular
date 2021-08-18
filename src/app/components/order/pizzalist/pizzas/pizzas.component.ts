import { Component, OnInit, Input } from '@angular/core';
import { Pizzamodel } from 'src/app/models/pizzamodel';


@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  
  @Input() pizza: Pizzamodel;
  constructor() { }

  ngOnInit(): void {

    

  }

}
