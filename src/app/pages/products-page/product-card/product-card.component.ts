import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input()
  produitCard: any;
  
  DEFAULT_IMG:string="https://cdn.pixabay.com/photo/2019/03/22/09/38/unicorn-4072862_960_720.png"
  constructor() { }

  ngOnInit(): void {
  }

}
