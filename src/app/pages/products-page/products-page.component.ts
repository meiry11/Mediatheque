import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Film } from './models/Film.model';
import { ProductsHttpService } from './services/products-http.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  films: Film [] = [];
  albums:[] = [];
    
  constructor(private service:ProductsHttpService) {
    this.service.findAll().subscribe((Film) =>this.films=Film)
   }

  ngOnInit(): void {
  }

}
