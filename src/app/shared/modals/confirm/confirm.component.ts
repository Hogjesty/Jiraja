import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

  public constructor(private dialogRef: MatDialogRef<ConfirmComponent>, @Inject(MAT_DIALOG_DATA) public textForModal: string) {
  }

  public closeModal(isAgree: boolean): void {
    this.dialogRef.close(isAgree);
  }
}
