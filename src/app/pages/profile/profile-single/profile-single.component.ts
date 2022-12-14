import { Component, Input, OnInit } from '@angular/core';
import { profile } from 'src/interface/profile.interface';
import { DashboardService } from 'src/app/services/dashboard.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-single',
  templateUrl: './profile-single.component.html',
  styleUrls: ['./profile-single.component.scss']
})
export class ProfileSingleComponent implements OnInit {

  @Input('data')data?: profile;
  @Input('pageIndex')pageIndex: number = 1
  @Input('total')total: number = 1;
  listOfProfile: profile[] = [];

  constructor(private services: DashboardService) { }

  ngOnInit(): void {
    this.getProfile()
  }


  getProfile() {
    this.services.getProfile().subscribe((x: any) => {
      x.map((x: any) => {
        x.url = environment.HOST + x.url;
      })
      this.listOfProfile = x; 
    });
  }

  onIndexChange = ((x: any) => {
    console.log(x)
    this.data = this.listOfProfile[x - 1];
    this.pageIndex = x;
  }) 
}
