import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-pizzalist',
  templateUrl: './pizzalist.component.html',
  styleUrls: ['./pizzalist.component.css']
})
export class PizzalistComponent implements OnChanges {

  public pizzaList: Pizza[]=[];
  
  @Input() receivedFromPrice: number=0;
  @Input() receivedToPrice: number=0;

  


  constructor(private pizzaservice: PizzasService) {
    
   }
  ngOnChanges(): void {
    
    console.log(this.receivedFromPrice);
    console.log(this.receivedToPrice);
    this.pizzaservice.getFilteredPizzas(this.receivedFromPrice, this.receivedToPrice).subscribe( data => this.pizzaList = data );
  
  }
   

  // filteredPizzaList(){
  //   this.pizzaservice.getFilteredPizzas(this.receivedFromPrice, this.receivedToPrice).subscribe( data => this.pizzaList = data ); 
  // }
  

  // ngOnInit(): void {
  //   console.log(this.receivedFromPrice);
  //   console.log(this.receivedToPrice);
  //   this.pizzaservice.getFilteredPizzas(this.receivedFromPrice, this.receivedToPrice).subscribe( data => this.pizzaList = data );
    
  //   //this.pizzaservice.getAllPizzas().subscribe( data => this.pizzaList = data );
  //   // this.receivedFromPrice=0;
  //   // this.receivedToPrice=2000;
    
  //   //this.filteredPizzaList();
    
  // }

}
