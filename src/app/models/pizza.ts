export class Pizza {

    pizzaId: number;
    pizzaType: string;
    pizzaName: string;
    pizzaSize: string;
    pizzaDescription: string;
    pizzaCost: number;
    pizzaImageUrl: string;


    constructor(pizzaId: number, pizzaType: string, pizzaName: string, pizzaSize: string, pizzaDescription: string, pizzaCost: number, pizzaImageUrl: string){
        this.pizzaId=pizzaId;
        this.pizzaType=pizzaType;
        this.pizzaName=pizzaName;
        this.pizzaSize=pizzaSize;
        this.pizzaDescription= pizzaDescription;
        this.pizzaCost= pizzaCost;
        this.pizzaImageUrl=pizzaImageUrl;
    }

    
}
