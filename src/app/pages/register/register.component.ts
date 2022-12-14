import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { profile } from 'src/interface/profile.interface';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DashboardService } from 'src/app/services/dashboard.service';
import { DatePipe } from '@angular/common';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { getISOWeek } from 'date-fns';

import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

interface Position {
  id: string;
  value: string;
  isopen: boolean;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  selectedFile = null;
  submitForm!: FormGroup;

  userPositionList: Position[] = [];
  departmentList: Position[] = [];
  priorityList: Position[] = [];
  today: Date = new Date();
  userID: string = '';
  countString: any;

  formData = new FormData();
  fileName: any;
  fileList: string[] = [];
  file: any;

  loading = false;
  avatarUrl?: string;

  date = null;
  birthday = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private message: NzMessageService,
    private service: DashboardService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.submitForm = this.fb.group({
      title: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      dept: ['', Validators.required],
      pos: ['', Validators.required],
      personal_id: ['', Validators.required],
      tel: ['', Validators.required],
      start_date: ['', Validators.required],
      birthday: ['', Validators.required],
      address: ['', Validators.required],
      medical: ['', Validators.required],
      img: [null, Validators.required],
    });

    this.getUserPosition();
    this.getDepartment();
    this.getDate();
  }

  getDate() {
    this.today = new Date();
  }

  getUserPosition() {
    this.service.getUserPosition().subscribe((x: any) => {
      this.userPositionList = x;
    });
  }

  getDepartment() {
    this.service.getDepartment().subscribe((x: any) => {
      this.departmentList = x;
    });
  }

  getPriority() {
    this.service.getPriority().subscribe((x: any) => {
      this.priorityList = x;
    });
  }

  createSuccessMessage(type: string): void {
    this.message.create(type, `บันทึกข้อมูลเรียบร้อย ${type}`);
  }

  createErrorMessage(type: string): void {
    this.message.create(type, `ไม่สามารถบันทึกข้อมูลได้ ${type}`);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.submitForm.patchValue({ img: file.name });
      this.formData.set('file', file);
    }
  }

  beforeUpload = (file: any): boolean => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      this.message.error('You can only upload JPG file!');
      return false;
    }
    const isLt2k = file.size! / 1024 < 500;
    if (!isLt2k) {
      this.message.error('Image must smaller than 500KB!');
      return false;
    }

    if (isJpgOrPng && isLt2k) {
      this.formData.set('file', file);
      this.submitForm.patchValue({ img: true });

      this.getBase64(file, (img: string) => {
        this.avatarUrl = img;
      });
    }
    return false;
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.message.error('Network error');
        this.loading = false;
        break;
    }
  }

  onDateChange(result: any): void {
    this.datePipe.transform(result);
    console.log('onDateChange: ', result);
  }

  onBirthdayChange(result: any): void {
    console.log('onBirthdayChange: ', result);
  }

  submit() {
    console.log(this.submitForm.value);
    if (this.submitForm.valid) {
      var sd = this.submitForm.get('start_date')?.value;
      var bd = this.submitForm.get('birthday')?.value;
      this.submitForm.patchValue({
        start_date: this.datePipe.transform(sd, 'yyyy-MM-dd')?.toString(),
        birthday: this.datePipe.transform(bd, 'yyyy-MM-dd')?.toString(),
      });
      this.formData.set('data', JSON.stringify(this.submitForm.value));
      this.service.registerUser(this.formData).subscribe((x) => {
        console.log(x);
        if (x == true) {
          this.createSuccessMessage('success');
        } else {
          this.createErrorMessage('error');
        }
      });
    }
  }
}
