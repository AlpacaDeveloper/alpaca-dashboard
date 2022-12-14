import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from 'src/interface/user.interface';

// interface User {
//   id: string;
//   name: string;
//   surname: string;
//   account_id: string;
//   personal_id: string;
//   department: string;
//   position: string;
//   priority: string;
//   tel: string;
//   start_date: string;
//   birthday: string;
//   address: string;
//   medical: string;
//   url: string;
//   level: number;
// }

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin!: boolean;
  job_info = false;
  trainee_info = false;
  manage_info = false;
  register_info = false;

  password = 'Alpaca2021';

  currentUser: User | null = null;

  constructor(private router: Router, private http: HttpClient) {}

  login(body: any) {
    this.http
      .post(environment.APIURL + '/login.php', body)
      .subscribe((x: any) => {
        if (x != false) {
          console.log(x);
          x.url = environment.HOST + x.url;
          this.currentUser = x;
          console.log(this.currentUser);
          this.isLogin = true;
          this.router.navigate(['/personalprofile']);
          localStorage.setItem('isLogin', 'true');
          localStorage.setItem('userId', this.currentUser!.account_id);
          var exp = new Date();
          exp.setDate(exp.getDate() + 1);

          localStorage.setItem('exp', exp.toString());
          this.checkLevel();
        } else {
          alert('wrong password');
        }
      });
  }

  checkEXP() {
    var isLoggedIn = localStorage.getItem('isLogin');
    var expString = localStorage.getItem('exp');

    var expDate = new Date(expString!);

    var currentDate = new Date();

    if (currentDate > expDate) {
      this.router.navigate(['/login']);
      localStorage.removeItem('isLogin');
    }

    if (isLoggedIn != null) {
      this.isLogin = true;
      this.check();
    }
    if (!this.isLogin) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.router.navigate(['/login']);
    localStorage.removeItem('isLogin');
    localStorage.removeItem('userId');
  }

  checkLevel() {
    var level = 0;
    switch (this.currentUser?.priority) {
      case 'Superadmin':
        level = 5;
        break;
      case 'Manager':
        level = 4;
        break;
      case 'Manager Assistant':
        level = 3;
        break;
      case 'Section Manager':
        level = 2;
        break;
      case 'Staff':
        level = 1;
        break;
    }

    this.currentUser!.level = level;
  }

  getLevel() {
    return this.currentUser?.level;
  }

  getPersonal() {
    var localId = localStorage.getItem('userId')!;
    var params = new HttpParams().set('id', localId);
    return this.http.get(environment.APIURL + '/getLoginUser.php', { params });
  }

  check() {
    var localId = localStorage.getItem('userId');
    console.log(localId);
    if (localId != null) {
      var params = new HttpParams().set('id', localId);
      this.http
        .get(environment.APIURL + '/getLoginUser.php', { params })
        .subscribe((x: any) => {
          x.url = environment.HOST + x.url;
          this.currentUser = x;
          this.checkLevel();
          this.router.navigate(['/personalprofile']);
        });
    } else {
      this.router.navigate(['/login']);
    }
  }
}
