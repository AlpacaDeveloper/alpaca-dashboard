import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

interface Position {
  id: string;
  value: string;
  isopen: boolean;
}

@Component({
  selector: 'app-open-position',
  templateUrl: './manage-jobApp.component.html',
  styleUrls: ['./manage-jobApp.component.scss'],
})
export class ManageJobAppComponent implements OnInit {
  checked = true;
  switchValue = false;

  positionList: Position[] = [];

  positionInput: string = '';

  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    this.getPositions(),
    this.getManageJob()
  }


  getManageJob(){
    this.service.getManageJob().subscribe((x: any)=>{
        if (x == '0') {
          this.switchValue = false;
        } else {
          this.switchValue = true;
        }
        console.log(x)
    
    })
  }

  getPositions() {
    this.service.getPositions().subscribe((x: any) => {
      x.map((y: any) => {
        if (y.isopen == '0') y.isopen = false;
        else y.isopen = true;
      });
      this.positionList = x;
    });
  }



  addPosition() {
    this.service.insertPosition(this.positionInput).subscribe((x) => {
      if (x == true) {
        this.getPositions();
      } else {
      }
    });
  }

  deletePosition(id: string){
    this.service.deletePosition(id).subscribe(x => {
      if ( x == true ) {
        this.getPositions();
      }
    })
  }

  onChange = (x: any, pos: Position) => {
    pos.isopen = x

    this.service.updatePosition(pos).subscribe( x => {
      console.log(x)
    })
  }

  closeJobApplication = () => {
    
    this.service.closeJobApplication(this.switchValue).subscribe( x => {
      console.log(x)
    })
  }

}
