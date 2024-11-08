import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductsComponent,
    LoginComponent,
    AboutComponent,
    RouterOutlet,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demob1';
}
