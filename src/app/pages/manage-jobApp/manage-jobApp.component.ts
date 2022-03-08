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
  traineeSwitchValue = false;
  justJobSwitchValue = false;

  positionList: Position[] = [];
  traineePositionList: Position[] = [];

  positionInput: string = '';
  traineePositionInput : string = '';

  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    this.getPositions(),
    this.getManageJob(),
    this.getTraineePosition(),
    this.getManageTrainee()
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

  getManageTrainee(){
    this.service.getManageTrainee().subscribe((x: any)=>{
        if (x == '0') {
          this.traineeSwitchValue = false;
        } else {
          this.traineeSwitchValue = true;
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


  getTraineePosition() {
    this.service.getTraineePosition().subscribe((x: any) => {
      x.map((y: any) => {
        if (y.isopen == '0') y.isopen = false;
        else y.isopen = true;
      });
      this.traineePositionList = x;
      console.log(x)
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

  addTraineePosition() {
    console.log(this.traineePositionInput)
    this.service.insertTraineePosition(this.traineePositionInput).subscribe((x:any) => {
      console.log(x)
      if (x == true) {
        this.getTraineePosition();
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

  deleteTraineePosition(id: string){
    this.service.deleteTraineePosition(id).subscribe((x: any) => {
      if ( x == true ) {
        this.getTraineePosition();
      }
    })
  }

  onChange = (x: any, pos: Position) => {
    pos.isopen = x

    this.service.updatePosition(pos).subscribe( x => {
      console.log(x)
    })
  }

  onTraineeChange = (x: any, pos: Position) => {
    pos.isopen = x

    this.service.updateTraineePosition(pos).subscribe( x => {
      console.log(x)
    })
  }


  closeJobApplication = () => {
    
    this.service.closeJobApplication(this.switchValue).subscribe( x => {
      console.log(x)
    })
  }

  closeJustJobApplication = () => {
    
    this.service.closeJustJobApplication(this.justJobSwitchValue).subscribe( x => {
      console.log(x)
    })
  }

  closeTraineeJobApplication = () => {
    
    this.service.closeTraineeJobApplication(this.traineeSwitchValue).subscribe( x => {
      console.log(x)
    })
  }

}
