import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import {ProductsRoutingModule} from './products-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [ProductsComponent, CreateProductComponent, ListProductsComponent, EditProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
