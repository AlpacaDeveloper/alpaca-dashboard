import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  isCollapsed = false;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    var temp = localStorage.getItem('isLogin'); 
    var expString = localStorage.getItem('exp'); 

    var expDate = new Date(expString!); 

    var currentDate = new Date();

    if(currentDate > expDate) {
      this.router.navigate(['/login']);
      localStorage.removeItem('isLogin');
    }
    if (temp != null) {
      this.auth.isLogin = true;
      this.router.navigate(['/dashboard']);
    }
    if (!this.auth.isLogin) {
      this.router.navigate(['/login']);
    }
  }

  logOut() {
    this.router.navigate(['/login']);
    localStorage.removeItem('isLogin')
  }
}
