import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { profile } from 'src/interface/profile.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit{
  isCollapsed = false;

  level = 0;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.checkEXP();
    this.getLevel()
    this.getPersonal()
  }

  logOut() {
    this.auth.logout();
  }

  getLevel() {
    this.level = this.auth.getLevel()!;
    console.log(this.level)
  }

  getPersonal() {
    this.auth.getPersonal().subscribe((x: any) => {
      console.log(x.priority);
      switch (x.priority) {
        case 'Superadmin':
          this.level = 5;
          break;
        case 'Manager':
          this.level = 4;
          break;
        case 'Manager Assistant':
          this.level = 3;
          break;
        case 'Section Manager':
          this.level = 2;
          break;
        case 'Staff':
          this.level = 1;
          break;
      }
      
   
    });

  }


}
