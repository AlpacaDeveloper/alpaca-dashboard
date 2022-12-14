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
  searchValue = '';
  visible = false;

  listOfData: JobApplication[] = [];
  listOfDataDisplay = [...this.listOfData]

  checkOptionsOne: any = [
  ];

  constructor(private services: DashboardService) { }

  ngOnInit(): void {
    this.getJobApplications();
  }

  getJobApplications() {
    console.log('asdas')
    this.services.getJobApplications().subscribe((x: any) => {
      console.log(x)
      this.listOfData = x;
      this.listOfDataDisplay = [...this.listOfData]

      var temp = [...new Set(x.map((y: any) => { return y.pos }))]

      this.checkOptionsOne = temp.map((s: any) => {
        return {
          label: s,
          value: s,
          checked: true
        }
      })



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

  search(): void {
    this.visible = false;
    this.listOfDataDisplay = this.listOfData.filter(
      (item: JobApplication) => item.pos.toLowerCase().indexOf(this.searchValue) !== -1)
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  log(value: any): void {
   var filter: string[] = value.filter((x: any) => { return x.checked }).map((x: any) => x.value)

   this.listOfDataDisplay = this.listOfData.filter((x: any) => {
    return filter.includes(x.pos)
   })
  }

}
