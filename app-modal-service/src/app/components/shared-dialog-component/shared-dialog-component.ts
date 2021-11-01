// Angular
import { Component, OnInit, Inject } from '@angular/core';

// Third Party
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
} from '@angular/material/dialog';
import { SharedDialogData } from '../../models/shared-dialog-data';

// App

@Component({
  selector: 'shared-dialog',
  templateUrl: './shared-dialog.component.html',
  styleUrls: ['./shared-dialog.component.scss'],
})
export class SharedDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SharedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SharedDialogData
  ) {}

  ngOnInit() {}

  close(action: string): void {
    this.dialogRef.close(action);
  }
}
