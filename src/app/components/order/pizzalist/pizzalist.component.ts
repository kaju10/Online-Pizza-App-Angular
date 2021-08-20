import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-pizzalist',
  templateUrl: './pizzalist.component.html',
  styleUrls: ['./pizzalist.component.css']
})
export class PizzalistComponent implements OnInit {

  public pizzaList: Pizza[]=[];

  constructor(private pizzaservice: PizzasService) { }


  ngOnInit(): void {

    this.pizzaservice.getPizzas().subscribe( data => this.pizzaList = data );

  }

}
