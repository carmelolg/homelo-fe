import { HomeInfo } from './../shared/model/HomeInfo';
import { DeviceService } from './device.service';
import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  homeInfo: HomeInfo = new HomeInfo();
  devices = [];

  constructor(private deviceService: DeviceService, public dialog: MatDialog){}

  ngOnInit() {

    let infoSub = this.deviceService.getHomeInfo().subscribe(info => {
      this.homeInfo = info as HomeInfo;
      infoSub.unsubscribe();
    });

    let deviceSub = this.deviceService.getDevices().subscribe(devices => {
      this.devices = devices as [];
      deviceSub.unsubscribe();
    });
  }

  openDialog(device): void {

    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: {device: device}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deviceService.saveDevices(result.device);
      }
    });
  }

}

