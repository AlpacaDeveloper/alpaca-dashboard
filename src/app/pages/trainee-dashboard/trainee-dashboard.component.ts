import { Component, OnInit } from '@angular/core';
import { JobApplication } from 'src/interface/jobApplication.interface';

@Component({
  selector: 'app-trainee-dashboard',
  templateUrl: './trainee-dashboard.component.html',
  styleUrls: ['./trainee-dashboard.component.scss']
})
export class TraineeDashboardComponent implements OnInit {
  viewSwitch = false;
  singleItem? : JobApplication;
  pageIndex : number = 1;
  total: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  clickSwitch(): void {
    this.viewSwitch = !this.viewSwitch;
  }

  getSingleItem(item: any) {
    this.singleItem = item.job;
    this.viewSwitch = item.switch
    this.pageIndex = item.page
    this.total = item.total
  }

}
