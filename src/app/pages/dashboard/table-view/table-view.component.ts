import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { JobApplication } from 'src/interface/jobApplication.interface';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent implements OnInit {
  @Output() data = new EventEmitter<any>();

  listOfData: JobApplication[] = [];

  constructor(private services: DashboardService) {}

  ngOnInit(): void {
    this.getJobApplications();
  }

  getJobApplications() {
    console.log('asdas')
    this.services.getJobApplications().subscribe((x: any) => {
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
