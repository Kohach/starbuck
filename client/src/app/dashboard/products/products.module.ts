import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import {ProductsRoutingModule} from './products-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';

@NgModule({
  declarations: [ProductsComponent, CreateProductComponent, ListProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
