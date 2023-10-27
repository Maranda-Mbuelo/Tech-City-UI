import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { IProduct } from 'src/interfaces/IProduct';
import { IEditProduct } from 'src/interfaces/IEditProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.http
    .get<IProduct[]>(
      this.apiBaseUrl + '/api/Product'
    );
  }

  getProductById(id: string): Observable<IProduct>{
    return this.http
    .get<IProduct>(
      this.apiBaseUrl + '/api/Product/' + id
    );
  }

  editProduct(id: string, updatedProduct: IEditProduct): Observable<IEditProduct>{
    return this.http
    .put<IEditProduct>(
      this.apiBaseUrl + '/api/Product/' + id, updatedProduct
    );
  }

  deleteProductById(id: string): Observable<IProduct>{
    return this.http
    .delete<IProduct>(
      this.apiBaseUrl + '/api/' + id
    );
  }

}
