import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:3000/login';
  constructor(private httpService: HttpClient) {}
  login(email: string, password: string) {
    return this.httpService.post(this.url, { email, password });
  }
}
