import { RoomParams } from './../shared/model/RoomParams';
import { Component, OnInit } from '@angular/core';
import { HomeInfo } from './../shared/model/HomeInfo';
import { DashboardService } from './dashboard.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  homeInfo: HomeInfo = new HomeInfo();

  roomParams: RoomParams = new RoomParams();
  percentage = 80;
  temperature = 22;

  constructor(private dashboardService: DashboardService){}

  ngOnInit() {

    let infoSub = this.dashboardService.getHomeInfo().subscribe(info => {
      this.homeInfo = info as HomeInfo;
      infoSub.unsubscribe();
    });

    let roomSub = this.dashboardService.getCurrentParams().subscribe(params => {
      this.roomParams = params as RoomParams;
      console.log(this.roomParams);

      roomSub.unsubscribe();
    });
  }

}
