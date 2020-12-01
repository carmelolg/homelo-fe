import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { HouseService } from './house.service';
import { House } from './House';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  columns: string[] = ['name', 'address', 'actions'];
  results: House[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private houseService: HouseService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getHouses();
  }

  getHouses() {
    let houseServiceSub = this.houseService.getHouses().subscribe(results => {
      this.results = results as House[];
      houseServiceSub.unsubscribe();
    });
  }

  remove(code) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { code }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getHouses();
    });
  }



}
