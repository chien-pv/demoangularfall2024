import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  firstName: string = 'Trần Văn';
  lastName: string = 'B';
  isLogin = false;
  isSpecial = false;

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}
