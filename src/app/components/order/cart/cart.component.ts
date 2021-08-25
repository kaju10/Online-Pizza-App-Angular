import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { PizzaOrder } from 'src/app/models/pizza-order';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartitemsComponent } from './cartitems/cartitems.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cartItems:PizzaOrder[]= [];
  cartTotal: number;
  proceedToOrderButtonToggle: boolean= false;

  constructor(private msg: MessengerService) { }


  ngOnInit(): void {
    // this.msg.getPizzaToRemoveFromCart().subscribe((pizza: any)=>{
    //   this.DeletePizzasFromCart(pizza);
    //   console.log(this.cartItems);
    // });
    this.msg.getPizzaToCart().subscribe((pizza: any)=>{
      this.AddPizzasToCart(pizza);
      console.log(this.cartItems);
    });

    

  }
  
  AddPizzasToCart(orderedPizza: Pizza){

    this.proceedToOrderButtonToggle= true;
    let pizzaExists= false;
    

    for(let i in this.cartItems){
        if(this.cartItems[i].pizza.pizzaId==orderedPizza.pizzaId){
          this.cartItems[i].quantity++;
          pizzaExists=true;
          break;
        }
    }

    if(!pizzaExists){
      this.cartItems.push({
              pizza: orderedPizza,
              quantity:1,
              transactionMode: "Online"
            })

    }

    this.cartTotal=0;
    this.cartItems.forEach(i=> {this.cartTotal+= (i.pizza.pizzaCost*i.quantity)});
    
  }


  // DeletePizzasFromCart(orderedPizza: Pizza){

    
    

  //   for(let i in this.cartItems){
  //       if(this.cartItems[i].pizza.pizzaId==orderedPizza.pizzaId && this.cartItems[i].quantity>1){
  //         this.cartItems[i].quantity--;
  //         break;
  //       }
  //   }

  //   this.cartTotal=0;
  //   this.cartItems.forEach(i=> {this.cartTotal+= (i.pizza.pizzaCost*i.quantity)});
    
  // }



  @Output() public sendCartItemsToOrder = new EventEmitter();

  onClickProceedToOrder(){
     this.sendCartItemsToOrder.emit(this.cartItems);
     this.proceedToOrderButtonToggle= false;
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
