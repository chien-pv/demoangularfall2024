import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  id: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    let q = this.route.snapshot.queryParams['q'];
  }
}
