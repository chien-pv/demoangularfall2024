import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users = [];
  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.userService.getAllData().subscribe((data: any) => {
      this.users = data;
    });
  }
  search(search: NgForm) {
    console.log(search.value);
    let q = search.value.q;
    this.userService.getDataByQuery(q).subscribe((data: any) => {
      this.users = data;
    });
  }
}
