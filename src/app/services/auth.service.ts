import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin!: boolean;

  password = 'Alpaca2021';
  constructor(private router: Router) {}

  login(password: string) {
    if (password == this.password) {
      this.isLogin = true;
      this.router.navigate(['/dashboard']);
      localStorage.setItem('isLogin', 'true')

      var exp = new Date();
      exp.setDate(exp.getDate() + 1);

      localStorage.setItem('exp', exp.toString())
    } else {
      alert('wrong password');
    }
  }
}
