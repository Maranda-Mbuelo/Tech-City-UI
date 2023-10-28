import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductComponent } from './product/product.component';

// Import your components that will be associated with the routes

// Import other components as needed

const productsRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'product/:id',
    component: SingleProductComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
