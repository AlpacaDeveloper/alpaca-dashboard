import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JobApplication } from 'src/interface/jobApplication.interface';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-trainee-job-app',
  templateUrl: './trainee-job-app.component.html',
  styleUrls: ['./trainee-job-app.component.scss']
})
export class TraineeJobAppComponent implements OnInit {
  @Output() data = new EventEmitter<any>();

  listOfData: JobApplication[] = [];

  constructor(private services: DashboardService) { }

  ngOnInit(): void {
    this.getTrainee();
  }

  getTrainee() {
    console.log('asdas')
    this.services.getTrainee().subscribe((x: any) => {
      console.log(x)
      this.listOfData = x;
      var data = {
        job: x[0],
        switch: false,
        page: 1,
        total: this.listOfData.length
      };
      this.data.emit(data);
      
    });
  }

  singleItem(job: JobApplication) {
    var data = {
      job: job,
      switch: true,
      page: this.listOfData.findIndex((x) => {
        return x == job;
      }) + 1,
      total: this.listOfData.length
    };
    this.data.emit(data);
  }
}
