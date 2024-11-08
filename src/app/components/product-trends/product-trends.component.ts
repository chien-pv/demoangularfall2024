import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-trends',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-trends.component.html',
  styleUrl: './product-trends.component.css',
})
export class ProductTrendsComponent {}
