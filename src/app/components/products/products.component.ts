import { Component, inject } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
// router = new Router();
// new ProductsComponent(router);
export class ProductsComponent {
  // router = new Router();
  // router = inject(Router);
  constructor(private router: Router) {}
  products = [
    {
      id: 1,
      url: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
      name: 'Iphone 15',
      price: 200000,
      isSave: false,
    },
    {
      id: 2,
      url: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
      name: 'Iphone 16',
      price: 200000,
      isSave: false,
    },
    {
      id: 3,
      url: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
      name: 'Iphone 17',
      price: 200000,
      isSave: false,
    },
    {
      id: 4,
      url: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
      name: 'Iphone 18',
      price: 200000,
      isSave: false,
    },
    {
      id: 5,
      url: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
      name: 'Iphone 19',
      price: 200000,
      isSave: false,
    },
    {
      id: 6,
      url: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
      name: 'Iphone 20',
      price: 200000,
      isSave: false,
    },
    {
      id: 7,
      url: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
      name: 'Iphone 21',
      price: 200000,
      isSave: false,
    },
    {
      id: 8,
      url: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
      name: 'Iphone 22',
      price: 200000,
      isSave: false,
    },
  ];

  getData(data: any) {
    console.log(data);
    let index = this.products.findIndex((item) => {
      return item.id == data.id;
    });
    this.products[index].isSave = data.isSave;
    this.router.navigate(['/products'], {
      queryParams: { q: 'popular' },
    });
  }
}
