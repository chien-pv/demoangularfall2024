import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  firstName: string = 'Trần Văn';
  lastName: string = 'B';
  isLogin = false;
  isSpecial = false;
  name = '';
  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('accsesToken');
      const jwtHelper = new JwtHelperService();

      try {
        if (!jwtHelper.isTokenExpired(token)) {
          const decoded: any = jwtDecode(token as string);
          this.isLogin = true;
          this.name = decoded.name;
        } else {
          this.isLogin = false;
        }
      } catch (error) {
        this.isLogin = false;
      }
    } else {
      console.log('Web Storage is not supported in this environment.');
    }
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}
