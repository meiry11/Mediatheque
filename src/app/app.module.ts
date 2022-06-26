import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './commons/nav-bar/nav-bar.component';
import { FooterComponent } from './commons/footer/footer.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductListComponent } from './pages/products-page/product-list/product-list.component';
import { ProductCardComponent } from './pages/products-page/product-card/product-card.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDeatilsComponent } from './pages/product-page/product-deatils/product-deatils.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmFormulaireComponent } from './pages/products-page/film-formulaire/film-formulaire.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    HomePageComponent,
    ProductsPageComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductPageComponent,
    ProductDeatilsComponent,
    FilmFormulaireComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
