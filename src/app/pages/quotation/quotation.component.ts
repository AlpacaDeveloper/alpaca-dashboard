import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DashboardService } from 'src/app/services/dashboard.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';

interface Quotation {
  quotation_id?: string;
  dept?: string;
  address?: string;
  company_id?: string;
  condition?: string;
  amount?: string;
  vat?: string;
  total?: string;
  total_text?: string;

}

interface Quotation_Meta {
  index: number;
  quotation_id?: string;
  desc?: string;
  amount?: number;
  unit?: string;
  ppu?: number;
  cost?: number;
}

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss'],
})
export class QuotationComponent implements OnInit {
  printSwitch = true;
  editId: string | null = null;
  emptyRow = new Array();
  today: Date = new Date();
  dept_list = ['MD', 'TE', 'PD', 'MN'];
  qt: string = '';

  address1 = {
    id: '1',
    value: '',
  };

  qt_id = {
    id: '2',
    value: '',
  };

  condition = {
    id: '3',
    value: '',
  };

  company_id = {
    id: '4',
    value: '',
  };

  dept = {
    id: '5',
    value: '',
    abb: '',
  };

  amount = {
    id: '6',
    value: '',
  };

  vat = {
    id: '7',
    value: '',
  };

  total = {
    id: '8',
    value: '',
  };

  total_text = {
    id: '9',
    value: '',
  };

  constructor(
    private datePipe: DatePipe,
    private dbService: DashboardService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    for (var i = 0; i < 15; i++) {
      var temp: Quotation_Meta = { index: i + 1 };
      this.emptyRow.push(temp);
    }
    console.log(this.emptyRow);
  }

  getDate() {
    this.today = new Date();
  }

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  createSuccessMessage(type: string): void {
    this.message.create(type, `บันทึกข้อมูลเรียบร้อย ${type}`);
  }

  createErrorMessage(type: string): void {
    this.message.create(type, `ไม่สามารถบันทึกข้อมูลได้ ${type}`);
  }

  generateQtID() {
    var date = this.datePipe.transform(this.today, 'yyyy-MM-dd')?.toString()!;

    console.log(date);
    console.log(this.dept.abb);
    this.dbService.checkQtID(date, this.dept.abb).subscribe((x: any) => {
      console.log(x);
      var count = parseInt(x) + 1;
      var countString = '';
      if (count < 10) {
        countString = '0';
      }
      countString += count.toString();

      var date = this.datePipe.transform(this.today, 'yyMM')?.toString();
      console.log(date);

      this.qt = this.dept.abb + 'QT' + date + countString;
    });
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
    this.generateQtID();
  }

  submit() {
    var tempArr = this.emptyRow.filter((x) => {
      return x.desc ? true : false;
    });
    console.log(tempArr);

    var quotation:Quotation = {
      quotation_id: this.qt,
      dept: this.dept.abb,
      company_id: this.company_id.value,
      address: this.address1.value,
      condition: this.condition.value,
      amount: this.amount.value,
      vat: this.vat.value,
      total: this.total.value,
      total_text: this.total_text.value


    }

    var body = {quotation: quotation, meta: tempArr}

    // var body = {
    //   qt_id: this.qt,
    //   dept: this.dept.abb,
    //   address1: this.address1.value,
    //   condition: this.condition.value,
    //   company_id: this.company_id.value,
    //   amount: this.amount.value,
    //   vat: this.vat.value,
    //   total: this.total.value,
    //   total_text: this.total_text.value,
    // };

    this.dbService.insertQt(body).subscribe((x) => {
      console.log(x);
      if (x != null) {
        this.createSuccessMessage('success');
        this.printSwitch = false;
      } else {
        this.createErrorMessage('error');
      }
    });
  }

  onAmountChange(evt: any) {
    this.calculateTotal();
  }

  calculateTotal() {
    var temp = this.emptyRow
      .filter((x) => {
        return x.desc ? true : false;
      })
      .map((x) => {
        return x.cost;
      });
    console.log(temp);

    var total = 0;
    for (var i = 0; i < temp.length; i++) {
      total += temp[i];
    }

    this.amount.value = total.toFixed(2);

    var vat = total * 0.07;

    this.vat.value = vat.toFixed(2);

    var totalWithVat = total + vat;

    this.total.value = totalWithVat.toFixed(2);
  }
}
