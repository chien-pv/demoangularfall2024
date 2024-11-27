import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

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
  isLogin = true;
  isSpecial = false;
  name = '';
  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('accsesToken');
      const decoded: any = jwtDecode(token as string);
      this.name = decoded.name;
    } else {
      console.log('Web Storage is not supported in this environment.');
    }
  }
  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}
