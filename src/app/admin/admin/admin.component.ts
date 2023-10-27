import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { IProduct } from 'src/interfaces/IProduct';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  companyName: string = 'tech city';
  companyIcon: string = `<i class="fa-brands fa-square-pied-piper px-2"></i>`;
  products: IProduct[] = [];

  constructor(private productService: ProductsService){}

  ngOnInit(): void{
    this.retrieveAllProducts();
  }

  retrieveAllProducts(): void{
    this.productService.getAllProducts()
    .subscribe(
      response => {
        this.products = response;
        console.log(this.products);
      }
    )
  }

}
