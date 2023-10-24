import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IFeaturette } from 'src/interfaces/IFeaturette';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() loading: boolean = true;
  @Input() feature: IFeaturette[] = [];
  @Output() selectItem = new EventEmitter<IFeaturette>(); // Emit selected item

  constructor(private router: Router) {}

  onItemSelected(item: IFeaturette) {
    this.selectItem.emit(item);
  }

  onViewClicked(item: IFeaturette) {
    const itemName = item.name.toLowerCase().replace(/ /g, '-'); // Create the 'id' from the item name
    this.router.navigate(['product', itemName]); // Navigate to SingleProductComponent with 'id' parameter
  }
}
