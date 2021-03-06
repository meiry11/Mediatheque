import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import{ProductCardComponent} from './pages/products-page/product-card/product-card.component'; 
const routes: Routes = [
  {path:'details/:produitCard',component:ProductCardComponent},
  
  {path:'',redirectTo:'home',pathMatch: "full"},
  {path: 'home',component:HomePageComponent},
  {path:'products',component:ProductsPageComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
