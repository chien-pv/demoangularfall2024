import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-hots',
  standalone: true,
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './product-hots.component.html',
  styleUrl: './product-hots.component.css',
})
export class ProductHotsComponent {
  items = [1, 3, 4, 5];
}
