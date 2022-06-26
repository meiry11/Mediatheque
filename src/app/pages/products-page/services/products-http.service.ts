import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from 'src/app//pages/products-page/models/Film.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsHttpService {

  constructor(private http:HttpClient) { }
  public findAll(){
    return this.http.get<Film[]>("http://localhost:3000/films")
  }
}
