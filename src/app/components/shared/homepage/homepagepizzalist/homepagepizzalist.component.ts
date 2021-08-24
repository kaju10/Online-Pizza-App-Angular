import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-homepagepizzalist',
  templateUrl: './homepagepizzalist.component.html',
  styleUrls: ['./homepagepizzalist.component.css']
})
export class HomepagepizzalistComponent implements OnChanges {

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

}
