import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import Film from 'src/app/models/Film.model';
import { AlbumService } from 'src/app/services/album.service';
import { FilmService } from 'src/app/services/film.service';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  films: Film [] = [];
 
    
  constructor(private filmService:FilmService, private albumService:AlbumService) {
    
  }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((Film) =>this.films=Film)
    
    
  }

}
