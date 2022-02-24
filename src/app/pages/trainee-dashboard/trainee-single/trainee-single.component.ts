import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { JobApplication } from 'src/interface/jobApplication.interface';

@Component({
  selector: 'app-trainee-single',
  templateUrl: './trainee-single.component.html',
  styleUrls: ['./trainee-single.component.scss']
})
export class TraineeSingleComponent implements OnInit {

  @Input('data')data?: JobApplication;
  @Input('pageIndex')pageIndex: number = 1
  @Input('total')total: number = 1;
  listOfData: JobApplication[] = [];

  constructor(private services: DashboardService) { }

  ngOnInit(): void {
    this.getTrainee()
  }

  getTrainee() {
    this.services.getTrainee().subscribe((x: any) => {
      this.listOfData = x;    
    });
  }


  onIndexChange = ((x: any) => {
    console.log(x)

    this.data = this.listOfData[x - 1];
    this.pageIndex = x;
  }) 



}
