import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      url: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
      name: 'Iphone 15',
      price: 200000,
    },
    {
      id: 2,
      url: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
      name: 'Iphone 16',
      price: 200000,
    },
    {
      id: 3,
      url: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
      name: 'Iphone 17',
      price: 200000,
    },
    {
      id: 4,
      url: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
      name: 'Iphone 18',
      price: 200000,
    },
    {
      id: 5,
      url: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
      name: 'Iphone 19',
      price: 200000,
    },
    {
      id: 6,
      url: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
      name: 'Iphone 20',
      price: 200000,
    },
    {
      id: 7,
      url: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
      name: 'Iphone 21',
      price: 200000,
    },
    {
      id: 8,
      url: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
      name: 'Iphone 22',
      price: 200000,
    },
  ];
}
