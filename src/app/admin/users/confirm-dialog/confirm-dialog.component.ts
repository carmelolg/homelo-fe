import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { UserService } from './../user.service';

export interface DialogData {
  user: string;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: 'confirm-dialog.component.html',
})
export class ConfirmDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private userService: UserService) {}

  ok(): void {
    this.userService.removeUser(this.data.user).subscribe(result => {
      this.dialogRef.close();
    });

  }

  ko(): void {
    this.dialogRef.close();
  }

}
