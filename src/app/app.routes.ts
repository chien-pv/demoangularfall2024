import {
  CanActivateFn,
  Routes,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RootComponent } from './root/root.component';
import { AdminComponent } from './admin/admin.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const canActivateLogin: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return false;
};

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'home',
        canActivate: [canActivateLogin],
        component: HomeComponent,
      },
      { path: 'about', component: AboutComponent },
      { path: 'login', component: LoginComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ],
  },

  {
    path: 'admin',
    component: AdminComponent,
    pathMatch: 'prefix',
    children: [{ path: 'products', component: ProductsComponent }],
  },
  { path: '**', component: PageNotFoundComponent },
];
