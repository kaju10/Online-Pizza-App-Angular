import { Injectable } from '@angular/core';
import { Pizza} from '../models/pizza';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { viewPizzaUrl } from '../config';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor(private httpRequests: HttpClient) { }



  public getPizzas(): Observable<Pizza[]>{
    return this.httpRequests.get<Pizza[]>(viewPizzaUrl);
}

}
