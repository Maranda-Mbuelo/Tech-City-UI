import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth/auth.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ProductComponent } from './products/product/product.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { ProductsComponent } from './products/products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: "auth", component: AuthComponent},
  { path: "admin", component: AdminComponent},
  { path: "checkout", component: CheckoutComponent},
  { path: "cart/:userId", component: CartComponent},
  // { path: "products", component: ProductsComponent},
  // { path: "product", component: ProductComponent},
  // { path: "product/:id", component: SingleProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
