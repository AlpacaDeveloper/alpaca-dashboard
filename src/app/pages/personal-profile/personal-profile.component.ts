import { Component, OnInit } from '@angular/core';
import { profile } from 'src/interface/profile.interface';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.scss'],
})
export class PersonalProfileComponent implements OnInit {
  personalProfile: profile | null = null;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.getPersonal();
  }

  getPersonal() {
    this.auth.getPersonal().subscribe((x: any) => {
      console.log(x);
      this.personalProfile = x;
      x.url = environment.HOST + x.url;
    });
    console.log(this.personalProfile);
  }
}
