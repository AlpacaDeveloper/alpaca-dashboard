import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss'],
})
export class MemoComponent implements OnInit {
  editId: string | null = null;

  subject = {
    id: '1',
    value: '',
  };

  content = {
    id: '2',
    value: '',
  };

  from = {
    id: '3',
    value: 'ชื่อ-นามสกุล',
  };

  position = {
    id: '4',
    value: '',
  };

  dept = {
    id: '5',
    value: '',
    abb: '',
  };

  for = {
    id: '6',
    value: '',
    date: '',
  };

  footerName = {
    id: '7',
    value: 'นาย / นาง ชื่อ-นามสกุล',
  };

  footerPosition = {
    id: '8',
    value: '',
  };

  isPickerVisible = false;

  today: Date = new Date();

  dept_list = ['MD', 'TE', 'PD', 'MN'];

  memoID: string = '';

  printSwitch = true;

  constructor(
    private datePipe: DatePipe,
    private dbService: DashboardService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.getDate();
  }

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  getDate() {
    this.today = new Date();
  }
  createSuccessMessage(type: string): void {
    this.message.create(type, `บันทึกข้อมูลเรียบร้อย ${type}`);
  }

  createErrorMessage(type: string): void {
    this.message.create(type, `ไม่สามารถบันทึกข้อมูลได้ ${type}`);
  }

  generateMemoID() {
    var date = this.datePipe.transform(this.today, 'yyyy-MM-dd')?.toString()!;

    console.log(date)
    console.log(this.dept.abb)
    this.dbService.checkMemoID(date, this.dept.abb).subscribe((x: any) => {
      console.log(x);
      var count = parseInt(x) + 1;

      var countString = '';
      if (count < 10) {
        countString = '0';
      }
      countString += count.toString();

      var date = this.datePipe.transform(this.today, 'yyMM')?.toString();
      console.log(date);

      this.memoID = this.dept.abb + date + countString; 
    });
  }

  onForChange(evt: any) {
    switch (evt) {
      case 'เพื่อโปรดดําเนินการภายในวันที่':
      case 'เพื่อโปรดทราบและพิจารณาภายในวันที่':
        this.isPickerVisible = true;
        break;
      default:
        this.isPickerVisible = false;
    }
  }

  onDateChange(evt: any) {
    this.for.date = this.datePipe.transform(evt, 'dd/MM/yyyy')?.toString()!;
  }

  onDeptChange(evt: any) {
    console.log(evt);
    switch (evt) {
      case 'Media':
        this.dept.abb = 'MD';
        break;
      case 'Technology':
        this.dept.abb = 'TE';
        break;
      case 'Production':
        this.dept.abb = 'PD';
        break;
      case 'Management':
        this.dept.abb = 'MN';
        break;
    }
    this.generateMemoID();
  }

  submit() {
    var body = {
      memoID: this.position.value + this.memoID,
      dept: this.dept.abb,
      subject: this.subject.value,
      from: this.from.value,
      for: this.for.value,
      content: this.content.value,
    };

    this.dbService.insertMemo(body).subscribe((x) => {
      console.log(x);
      if (x == true) {
        this.createSuccessMessage('success');
        // this.printSwitch = false;
      } else {
        this.createErrorMessage('error');
      }
    });
  }
}
