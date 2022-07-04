import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Film from '../models/Film.model';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class FilmService {
private jsonSerUrl= "http://localhost:3000"
  constructor(private httpClient: HttpClient) { }

  getFilms():Observable<Film[]>{
    return this.httpClient.get<Film[]>(`${this.jsonSerUrl}/films`)
  }
  getFilm(id:number):Observable<Film>{
    return this.httpClient.get<Film>(`${this.jsonSerUrl}/films/${id}`)
  
}
}
