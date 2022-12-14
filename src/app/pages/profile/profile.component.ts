import { Component, OnInit } from '@angular/core';
import { profile } from 'src/interface/profile.interface';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileSwitch = false;
  singleItem? : profile;
  pageIndex : number = 1;
  total: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  clickSwitch(): void {
    this.profileSwitch = !this.profileSwitch;
    console.log(this.profileSwitch)
  }

  getSingleItem(item: any) {
    this.singleItem = item.profile;
    this.profileSwitch = item.switch
    this.pageIndex = item.page
    this.total = item.total
  }
}
