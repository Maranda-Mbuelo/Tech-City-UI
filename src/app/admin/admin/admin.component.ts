import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { IProduct } from 'src/interfaces/IProduct';
import { ProductsService } from 'src/services/products.service';
import { UserService } from 'src/services/user.service';
import { IUser, IUserEdit } from 'src/interfaces/IUser.model';
import { CartService } from 'src/services/cart.service';
import { ICart } from 'src/interfaces/ICart.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  companyName: string = 'tech city';
  companyIcon: string = `<i class="fa-brands fa-square-pied-piper px-2"></i>`;
  products: IProduct[] = [];
  users: IUser[] = [];
  carts: ICart[] = [];
  cartCounter: number= 0;


  editedProduct: IProduct ={
    productID: '',
    productName: '',
    description: '',
    price: 0,
    stockQuantity: 0,
    imageURL: '',
  }

  constructor(
    private productService: ProductsService, 
    private userService: UserService, 
    private cartService: CartService){}

  ngOnInit(): void{
    this.retrieveAllProducts();
    this.retrieveAllUsers();
    this.retrieveAllCarts();
  }

  // Product Code

  saveEditedProduct(){
    console.log('Hey');
  }

  retrieveAllProducts(): void{
    this.productService
    .getAllProducts()
      .subscribe(
        response => {
          this.products = response;
          // console.log(this.products);
          console.log('success');
        }
      );
  }

  getProductById(id: string): void{
    this.productService.getProductById(id)
      .subscribe(
        response => {
          console.log(response);
        }
      )
  }

  addProduct(product: IProduct): void{
    this.productService.addProduct(product)
      .subscribe(
        response => {
          // console.log(response);
          console.log(`Success!`);
        }
      )
  }

  editProduct(productId: string, newProduct: IProduct): void{
    this.productService.editProduct(productId, newProduct).subscribe(
      response => {
        // console.log(response);
        console.log(`Success!`);
      }
    )
  }

  deleteProduct(id: string): void{
    if(id){
      this.productService.deleteProductById(id)
      .subscribe(
        response => {
          // console.log(response);
          console.log(`Success!`);
        }
      )
    } else{
      return
    }
  }

  // User Code

  retrieveAllUsers(): void{
    this.userService.getAllUsers()
      .subscribe(
        response => {
          this.users = response;
          // console.log(this.users);
          console.log('success!');
        }
      );
  }

  getUserById(id: string): void{
    this.userService.getUserById(id)
      .subscribe(
        response => {
          console.log(response);
        }
      )
  }

  addUser(user: IUser): void{
    this.userService.addUser(user)
      .subscribe(
        response => {
          // console.log(response);
        }
      );
  }

  editUser(userId: string, updatedUser: IUserEdit): void{
    this.userService.editUser(userId, updatedUser)
      .subscribe(
        response => {
          // console.log(response);
          console.log('success!')
        }
      )
  }

  deleteUser(userId: string): void{
    this.userService.deleteUser(userId)
      .subscribe(
        response => {
          // console.log(response);
          console.log('success!');
        }
      )
  }

  getCart(userId: string): boolean {
    if (userId) {
      return this.carts.some((cart) => cart.ownerUserID === userId);
    }
    return false;
  }

  getCartCount(userId: string): number {
    // Filter the carts array to find all carts owned by the provided userId
    const userCarts = this.carts.filter(cart => cart.ownerUserID === userId);

    // Return the count of userCarts
    return userCarts.length;
  }

  

  // Cart Code

  retrieveAllCarts(): void{
    this.cartService.getAllCart()
      .subscribe(
        response => {
          this.carts = response;
          // console.log(this.carts);
          console.log('success!');
        }
      )
  }

  addCart(cart: ICart){
    this.cartService.createCart(cart)
      .subscribe(
        response => {
          console.log(response);
        }
      )
  }

  getCartById(id: string): void{
    this.cartService.getCartById(id)
      .subscribe(
        response => {
          console.log(response);
        }
      )
  }

  editCartById(id: string, updatedCart: ICart): void{
    this.cartService.editCart(id, updatedCart)
      .subscribe(
        response => {
          console.log(response);
        }
      )
  }

  deleteCart(id: string): void{
    this.cartService.deleteCart(id)
      .subscribe(
        response => {
          console.log(response);
        }
      )
  }

  getCartOwnerName(userId: string): string {
    const user = this.users.find((user) => user.userID === userId);
    if (user) {
      return user.username;
    } else {
      return 'not found';
    }
  }

  getTotalCartPrice(cartOwnerId: string): number {
    // Filter the carts array to find all carts owned by the provided cartOwnerId
    const userCarts = this.carts.filter(cart => cart.ownerUserID === cartOwnerId);

    // Create a map to count how many times each product appears in the user's carts
    const productCounts = new Map<string, number>();

    userCarts.forEach(cart => {
        const productId = cart.productID;
        if (productCounts.has(productId)) {
          productCounts.set(productId, (productCounts.get(productId) || 0) + 1);
      } else {
          productCounts.set(productId, 1);
      }
      
    });

    // Calculate the total price by summing the product prices based on counts
    let totalPrice = 0;
    productCounts.forEach((count, productId) => {
        const product = this.products.find(p => p.productID === productId);
        if (product) {
            totalPrice += product.price * count;
        }
    });

    return totalPrice;
}


}
