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
import { UsersComponent } from './users/users.component';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

const canActivateLogin: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  let router: Router = new Router();
  const token = localStorage.getItem('accsesToken');
  const jwtHelper = new JwtHelperService();
  try {
    if (!jwtHelper.isTokenExpired(token)) {
      const decoded: any = jwtDecode(token as string);
      router.navigateByUrl('/home');
      return false;
    } else {
      return true;
    }
  } catch (error) {
    return true;
  }
};

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      { path: 'about', component: AboutComponent },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [canActivateLogin],
      },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ],
  },

  {
    path: 'admin',
    component: AdminComponent,
    pathMatch: 'prefix',
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'users', component: UsersComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];
