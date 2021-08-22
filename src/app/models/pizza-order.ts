import { Pizza } from "./pizza";

export class PizzaOrder {
    pizza: Pizza;
    quantity: number;
    transactionMode: string;

    constructor(pizza: Pizza, quantity: number, transactionMode: string){
        this.pizza=pizza;
        this.quantity=quantity;
        this.transactionMode= transactionMode;
    }

}
