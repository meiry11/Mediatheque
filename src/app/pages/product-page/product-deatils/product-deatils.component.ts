import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-deatils',
  templateUrl: './product-deatils.component.html',
  styleUrls: ['./product-deatils.component.css']
})
export class ProductDeatilsComponent implements OnInit {
@Input()
produitCard="";
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
