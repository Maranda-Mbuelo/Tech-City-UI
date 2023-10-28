import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tech City';

  constructor(private productService: ProductsService){}

  ngOnInit(): void {
    // this.retrieveAllProducts();
  }

  retrieveAllProducts(): void{
    this.productService.getAllProducts()
    .subscribe(
      response => {
        console.log(response);
      }
    )
  }

}
