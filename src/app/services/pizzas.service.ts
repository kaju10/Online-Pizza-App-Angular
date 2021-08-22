import { Injectable } from '@angular/core';
import { Pizza} from '../models/pizza';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { viewFilteredPizzaUrl, viewAllPizzaUrl } from '../config';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor(private httpRequests: HttpClient) { }



    public getAllPizzas(): Observable<Pizza[]>{
      return this.httpRequests.get<Pizza[]>(viewAllPizzaUrl);
    }

    public getFilteredPizzas(value1 : number , value2 : number): Observable<Pizza[]>{
      return this.httpRequests.get<Pizza[]>(viewFilteredPizzaUrl + '/' + value1 + '/' + value2);
    }

}
