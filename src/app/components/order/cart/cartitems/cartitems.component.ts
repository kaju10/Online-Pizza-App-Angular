import { Component, Input, OnInit } from '@angular/core';
import { Pizzamodel } from 'src/app/models/pizzamodel';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {

  @Input() cartPizza : any;

  constructor() { }

  ngOnInit(): void {
  }

  

}
