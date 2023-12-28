import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {BtnStyles} from "../../interfaces/BtnStyles";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

  public cancelBtnStyles: BtnStyles = {background: [150, 1, 19]};

  public constructor(private dialogRef: MatDialogRef<ConfirmComponent>, @Inject(MAT_DIALOG_DATA) public textForModal: string) {
  }

  public closeModal(isAgree: boolean): void {
    this.dialogRef.close(isAgree);
  }
}
