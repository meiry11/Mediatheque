import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ProductsPageComponent } from '../products-page/products-page.component';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
films =new ProductsPageComponent().films;
albums = new ProductsPageComponent().albums;
products = this.films.concat(this.albums);
produit!:any; 
  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get("id");
    if(id){
      this.produit = this.products.find(
        (produit) =>this.produit.id == id)
        
    }
  }

}
