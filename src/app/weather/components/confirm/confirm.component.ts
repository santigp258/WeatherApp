import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [],
})
export class ConfirmComponent implements OnInit {
  constructor(
    private dialogrRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data)
  }

  delete() {
    this.dialogrRef.close(true);
  }

  cancel() {
    this.dialogrRef.close();
  }
}

