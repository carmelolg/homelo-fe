import { Device } from './../Device';
import { HomeInfo } from './../../shared/model/HomeInfo';
import { SensorFilterService } from './../../sensor/sensor-view-table/sensor-view-table-filters/sensor-view-table-filters.service';
import { FormControl } from '@angular/forms';
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

export interface DialogData {
  device: Device;
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: 'edit-dialog.component.html',
})
export class EditDialogComponent {

  room = new FormControl();
  rooms: string[] = [];
  device: Device;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private sensorFilterService: SensorFilterService) {
    this.getRoomsAvailable();
    this.room.setValue(this.data.device.room);
    this.device = this.data.device;
  }

  save(): void {
    if (this.room.value === undefined || this.room.value === null) {
      this.dialogRef.close();
    } else {
      this.device.room = this.room.value;
      this.dialogRef.close({ device: this.device });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getRoomsAvailable() {
    let infoSub = this.sensorFilterService.getHomeInfo().subscribe(info => {
      const homeInfo = info as HomeInfo;
      this.rooms = homeInfo.rooms;
      infoSub.unsubscribe();
    });
  }

}
