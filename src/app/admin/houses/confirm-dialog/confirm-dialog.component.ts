import { HouseService } from './../house.service';
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

export interface DialogData {
  code: string;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: 'confirm-dialog.component.html',
})
export class ConfirmDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private houseService: HouseService) {}

  ok(): void {
    this.houseService.removeHouse(this.data.code).subscribe(result => {
      this.dialogRef.close();
    });

  }

  ko(): void {
    this.dialogRef.close();
  }

}
