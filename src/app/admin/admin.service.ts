import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/interfaces/IProduct';
import { ProductsService } from 'src/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private productsService: ProductsService) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.productsService.getAllProducts();
  }

}
