import { Component } from '@angular/core';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { ProductHotsComponent } from '../product-hots/product-hots.component';
import { ProductTrendsComponent } from '../product-trends/product-trends.component';
import { SliderComponent } from '../slider/slider.component';
import { StatisticComponent } from '../statistic/statistic.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    NewsletterComponent,
    ProductHotsComponent,
    ProductTrendsComponent,
    SliderComponent,
    StatisticComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
