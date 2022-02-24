import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { JobApplication } from 'src/interface/jobApplication.interface';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.scss']
})
export class SingleViewComponent implements OnInit {

  @Input('data')data?: JobApplication;
  @Input('pageIndex')pageIndex: number = 1
  @Input('total')total: number = 1;
  listOfData: JobApplication[] = [];
  

  constructor(private services: DashboardService) { }

  ngOnInit(): void {
    this.getJobApplications()
  
  }

  getJobApplications() {
    this.services.getJobApplications().subscribe((x: any) => {
      this.listOfData = x; 
    });
  }

  onIndexChange = ((x: any) => {
    console.log(x)

    this.data = this.listOfData[x - 1];
    this.pageIndex = x;
  }) 

  
}
