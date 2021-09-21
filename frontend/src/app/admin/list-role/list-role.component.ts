import { Component, OnInit, ViewChild } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {
  displayedColumns: string[] = ['NAME', 'DESCRIPTION', 'ACTIONS'];
  dataSource: MatTableDataSource<any>;
  roleData: any;
  message: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;

  constructor(
    private _roleService: RoleService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ){
    this.roleData = {};
    this.dataSource = new MatTableDataSource(this.roleData);
  }

  ngOnInit(): void {
    this._roleService.listRole().subscribe(
      (res) => {
        this.roleData = res.role;
        this.dataSource = new MatTableDataSource(this.roleData);
      },
      (err) => {
        this.message = err.error;
        this.openSnackBarError();
      }
    )
  }

  updateRole(){
    
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarFalse'],
    });
  }
}
