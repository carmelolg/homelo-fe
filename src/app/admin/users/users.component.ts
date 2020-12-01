import { FormControl } from '@angular/forms';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { UserService } from './user.service';
import { User } from './User';
import { House } from './../houses/House';
import { HouseService } from './../houses/house.service';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  columns: string[] = ['user', 'house', 'actions'];
  results: User[] = [];
  houses: string[] = [];

  house = new FormControl();
  username = new FormControl();
  password = new FormControl();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private houseService: HouseService, private userService: UserService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getHouses();
    this.getUsers();
  }

  getHouses() {
    let houseServiceSub = this.houseService.getHouses().subscribe(results => {
      this.houses = (results as House[]).map(item => item.code);
      houseServiceSub.unsubscribe();
    });
  }

  getUsers() {
    let userServiceSub = this.userService.getUsers().subscribe(results => {
      this.results = results as User[];
      userServiceSub.unsubscribe();
    });
  }

  remove(user) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }


  save() {
    const house = this.house.value;
    const username = this.username.value;
    const password = this.password.value;

    const user = new User(username, password, house);
    this.userService.saveUser(user).subscribe(result => {
      this.openSnackBar(username + ' saved');
      this.getUsers();
      this.reset();
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'ok', {
      duration: 2000,
    });
  }

  reset() {
    this.house = new FormControl();
    this.username = new FormControl();
    this.password = new FormControl();
  }
}
