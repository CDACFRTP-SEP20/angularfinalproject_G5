import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../admin/mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(){
    return this.dialog.open(MatConfirmDialogComponent,{
      width: "390px" ,
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: {top : "10px" }
    });
  }
}
