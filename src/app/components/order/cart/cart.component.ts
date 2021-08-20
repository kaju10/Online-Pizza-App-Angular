import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cartItems:any[]= [];
  cartTotal: number;

  constructor(private msg: MessengerService) { }


  ngOnInit(): void {
    this.msg.getMsg().subscribe((pizza: any)=>{
      this.AddPizzasToCart(pizza);
    }) ;
  }
  
  AddPizzasToCart(pizza: Pizza){

    let pizzaExists= false;
    

    for(let i in this.cartItems){
        if(this.cartItems[i].pizzaId==pizza.pizzaId){
          this.cartItems[i].quantity++;
          pizzaExists=true;
          break;
        }
    }

    if(!pizzaExists){
      this.cartItems.push({
              pizzaName: pizza.pizzaName,
              pizzaSize: pizza.pizzaSize,
              pizzaCost: pizza.pizzaCost,
              pizzaId: pizza.pizzaId,
              quantity:1
            })

    }

    this.cartTotal=0;
    this.cartItems.forEach(i=> {this.cartTotal+= (i.pizzaCost*i.quantity)});
    
  }

 

}


// AddPizzasToCart(pizza: Pizzamodel){
  //   if(this.cartItems.length===0){
  //     this.cartItems.push({
  //       pizzaName: pizza.pizzaName,
  //       pizzaSize: pizza.pizzaSize,
  //       pizzaCost: pizza.pizzaCost,
  //       pizzaId: pizza.pizzaId,
  //       quantity:1
  //     })
  //   }
  //   else{
  //     for(let i in this.cartItems){
  //       if(this.cartItems[i].pizzaId==pizza.pizzaId){
  //         this.cartItems[i].quantity++;
  //       }else{
  //         this.cartItems.push({
  //           pizzaName: pizza.pizzaName,
  //           pizzaSize: pizza.pizzaSize,
  //           pizzaCost: pizza.pizzaCost,
  //           pizzaId: pizza.pizzaId,
  //           quantity:1
  //         })
  //       }
  //     }
  //   }
  // }
