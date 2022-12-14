import { Component, OnInit } from '@angular/core';
import { superadmin } from 'src/interface/superadmin.interface';
import { DashboardService } from 'src/app/services/dashboard.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.scss'],
})
export class SuperadminComponent implements OnInit {
  constructor(private services: DashboardService,  private message: NzMessageService,) {}

  ngOnInit(): void {
    this.getUserProfile();
    this.getPriority();
    this.getDepartment();
    this.getPositon();
  }

  listOfData: superadmin[] = [];
  listOfPriority: any = [];
  listOfDepartment: any = [];
  listOfPosition:any = [];
  editId: string | null = null;


  createSuccessMessage(type: string): void {
    this.message.create(type, `บันทึกข้อมูลเรียบร้อย ${type}`);
  }

  createErrorMessage(type: string): void {
    this.message.create(type, `ไม่สามารถบันทึกข้อมูลได้ ${type}`);
  }

  createAcceptMessage(type: string): void {
    this.message.create(type, `อนุมัติสําเร็จ ${type}`);
  }

  createDeniedMessage(type: string): void {
    this.message.create(type, `ไม่สามารถอนุมัติได้ ${type}`);
  }



  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  updatePriority(data: any) {
    this.services.updatePriority(data).subscribe((x: any) => {
      console.log(x)
      if (x != null) {
        this.createSuccessMessage('success');
      } else {
        this.createErrorMessage('error');
      }
    });
  }

  getUserProfile() {
    this.services.getProfile().subscribe((x: any) => {
      console.log(x);
      this.listOfData = x;
    });
  }

  deleteProfile(id:any) {
    this.services.deleteProfile(id).subscribe((x:any) => {
      if ( x == true ) {
        this.getUserProfile();
    }})
  }


  getPriority() {
    this.services.getPriority().subscribe((x: any) => {
      console.log(x);
      this.listOfPriority = x;
      console.log(this.listOfPriority);
    });
  }

  getDepartment() {
    this.services.getDepartment().subscribe((x: any) => {
      console.log(x);
      this.listOfDepartment = x;
      console.log(this.listOfDepartment);
    });
  }

  getPositon() {
    this.services.getUserPosition().subscribe((x: any) => {
      console.log(x);
      this.listOfPosition = x;
      console.log(this.listOfPosition);
    });
  }

  randomPassword(data:any) {
    var chars = "0123456789";
    var passwordLength = 5;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
     }
     var obj = {password, data};
     console.log(obj)
     this.services.updateRandomPassword(obj).subscribe((x: any) => {
      if (x =true){
        this.getUserProfile();
        this.createAcceptMessage(`success`);
      }
      else {
        this.createDeniedMessage(`error`);
      }
    });
  }

}



