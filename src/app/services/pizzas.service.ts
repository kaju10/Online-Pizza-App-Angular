import { Injectable } from '@angular/core';
import { Pizzamodel } from '../models/pizzamodel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor(private httpRequests: HttpClient) { }



  public getPizzas(): Observable<Pizzamodel[]>{
    return this.httpRequests.get<Pizzamodel[]>("http://localhost:9090/viewPizza");
}

}
