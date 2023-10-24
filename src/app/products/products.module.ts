import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    SingleProductComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
