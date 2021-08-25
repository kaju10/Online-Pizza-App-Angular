import { Pizza } from "./pizza";

export class Pizzasender {
    pizza: Pizza;
    checker: number;

    constructor(pizza: Pizza, checker: number){
        this.pizza= pizza;
        this.checker= checker;
    }
}
