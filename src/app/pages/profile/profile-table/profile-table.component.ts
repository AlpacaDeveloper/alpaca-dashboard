import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { profile } from 'src/interface/profile.interface';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.scss'],
})
export class ProfileTableComponent implements OnInit {
  @Output() data = new EventEmitter<any>();

  listOfProfile: profile[] = [];
  visible: boolean[] = new Array(11).fill(false);
  listOfDisplayData = [...this.listOfProfile];

  constructor(private services: DashboardService) {}

  ngOnInit(): void {
    this.getProfile();
  }

  searchValue: profile = {
    title: '',
    name: '',
    surname: '',
    account_id: '',
    personal_id: '',
    department: '',
    position: '',
    tel: '',
    start_date: '',
    birthday: '',
    address: '',
    medical: '',
    url: ''
  };

  reset(x: number): void {
    switch (x) {
      case 1:
        this.searchValue.title = '';
        break;
      case 2:
        this.searchValue.name = '';
        break;
      case 3:
        this.searchValue.surname = '';
        break;
      case 4:
        this.searchValue.account_id = '';
        break;
      case 5:
        this.searchValue.personal_id = '';
        break;
      case 6:
        this.searchValue.department = '';
        break;
      case 7:
        this.searchValue.position = '';
        break;
      case 8:
        this.searchValue.tel = '';
        break;
      case 9:
        this.searchValue.start_date = '';
        break;
      case 10:
        this.searchValue.birthday = '';
        break;
      case 11:
        this.searchValue.address = '';
        break;
      case 12:
        this.searchValue.medical = '';
        break;
    }
    this.search();
  }

  search(): void {
    this.visible.fill(false);

    this.listOfDisplayData = this.listOfProfile
      .filter(
        (item: profile) => item.title!.indexOf(this.searchValue.title) !== -1
      )
      .filter(
        (item: profile) => item.name!.indexOf(this.searchValue.name) !== -1
      )
      .filter(
        (item: profile) =>
          item.surname!.indexOf(this.searchValue.surname) !== -1
      )
      .filter(
        (item: profile) =>
          item.account_id!.indexOf(this.searchValue.account_id) !== -1
      )
      .filter(
        (item: profile) =>
          item.personal_id!.indexOf(this.searchValue.personal_id) !== -1
      )
      .filter(
        (item: profile) =>
          item.department!.indexOf(this.searchValue.department) !== -1
      )
      .filter(
        (item: profile) =>
          item.position!.indexOf(this.searchValue.position) !== -1
      )
      .filter(
        (item: profile) =>
          item.address!.indexOf(this.searchValue.address) !== -1
      )
      .filter((item: profile) => item.tel!.indexOf(this.searchValue.tel) !== -1)
      .filter(
        (item: profile) =>
          item.start_date!.indexOf(this.searchValue.start_date) !== -1
      )
      .filter(
        (item: profile) =>
          item.birthday!.indexOf(this.searchValue.birthday) !== -1
      )
      .filter(
        (item: profile) =>
          item.address!.indexOf(this.searchValue.address) !== -1
      )
      .filter(
        (item: profile) =>
          item.medical!.indexOf(this.searchValue.medical) !== -1
      );
  }

  getProfile() {
    console.log('asdas');
    this.services.getProfile().subscribe((x: any) => {
      console.log(x);
      console.log(x.url)
      x.map((x: any) => {
        x.url = environment.HOST + x.url;
      })
      this.listOfProfile = x;
      this.listOfDisplayData = [...this.listOfProfile];
      var data = {
        profile: x[0],
        switch: false,
        page: 1,
        total: this.listOfProfile.length,
      };
      this.data.emit(data);
    });
  }

  singleItem(profile: profile) {
    var data = {
      profile: profile,
      switch: true,
      page:
        this.listOfProfile.findIndex((x) => {
          return x == profile;
        }) + 1,
      total: this.listOfProfile.length,
    };
    this.data.emit(data);
  }
}
