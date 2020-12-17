import { RoomParams } from './../shared/model/RoomParams';
import { Component, OnInit } from '@angular/core';
import { HomeInfo } from './../shared/model/HomeInfo';
import { DashboardService } from './dashboard.service';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  homeInfo: HomeInfo = new HomeInfo();
  roomParams: RoomParams = new RoomParams();
  isAlarmActive = false;

  constructor(private dashboardService: DashboardService, private _snackBar: MatSnackBar){}

  ngOnInit() {

    let infoSub = this.dashboardService.getHomeInfo().subscribe(info => {
      this.homeInfo = info as HomeInfo;
      this.reload();
      infoSub.unsubscribe();
    });

    let roomSub = this.dashboardService.getCurrentParams().subscribe(params => {
      this.roomParams = params as RoomParams;
      roomSub.unsubscribe();
    });

  }

  updateAlarm(house: string, event) {
      this.dashboardService.updateAlarm(house, event.checked).subscribe(result => {

        let msg = "Alarm disabled";
        if(event.checked) {
          msg = "Alarm enabled";
        }

        this.openSnackBar(msg);
        this.reload()
      });
  }


  openSnackBar(message: string) {
    this._snackBar.open(message, 'ok', {
      duration: 2000,
    });
  }

  reload() {
    let activeSub = this.dashboardService.isAlarmActive(this.homeInfo.code).subscribe(result => {
      this.isAlarmActive = result as boolean;
      activeSub.unsubscribe();
    });
  }


}
