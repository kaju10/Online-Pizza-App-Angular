import { Injectable } from '@angular/core';
import { Pizza} from '../models/pizza';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { viewFilteredPizzaUrl, viewAllPizzaUrl } from '../config';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor(private _httpClient: HttpClient) { }



    public getAllPizzas(): Observable<Pizza[]>{
      return this._httpClient.get<Pizza[]>(viewAllPizzaUrl);
    }

    public getFilteredPizzas(value1 : number , value2 : number): Observable<Pizza[]>{
      return this._httpClient.get<Pizza[]>(viewFilteredPizzaUrl + '/' + value1 + '/' + value2);
    }
  
  public addPizzaService(pizza:Pizza): Observable<Pizza>
  {
       return this._httpClient.post<Pizza>("http://localhost:9090/addpizza",pizza);
  }

  public getAllPizzaService()
  {
    return this._httpClient.get<any>("http://localhost:9090/viewpizza");
  }

  public getPizzaService(id:any)
  {
    return this._httpClient.get("http://localhost:9090/viewpizza/"+id);
  }

  public getPizzaByTypeService(pizzaType:any)
  {
    return this._httpClient.get("http://localhost:9090/viewpizza/type/"+pizzaType);
  }

  public updatePizzaService(id:any, pizza:Pizza)
  {
    return this._httpClient.put<Pizza>('http://localhost:9090/updatepizza',pizza);
  }

  public deletePizzaService(pizzaId:any)
  {
    return this._httpClient.delete<string>('http://localhost:9090/deletepizza/' + pizzaId,{responseType:'text' as 'json'});
  }

}
