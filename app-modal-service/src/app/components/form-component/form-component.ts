import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { CustomFormControl } from "src/app/models/custom-form-control";
import { SharedDialogData } from "src/app/models/shared-dialog-data";
import { FormsService } from "src/app/services/forms-service";
import { SharedDialogComponent } from "../shared-dialog-component/shared-dialog-component";

@Component({
  selector: 'app-form',
  templateUrl: './form-component.html',
  styleUrls: ['./form-component.scss'],
})
export class FormComponent implements OnInit{

  form!: FormGroup;
  constructor(
    public formService: FormsService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
    nombre: new CustomFormControl("Nombre", null, [
      Validators.required,
      Validators.maxLength(250),
    ]),
    edad: new CustomFormControl("Edad", null, [
      Validators.required
    ]),
    direccion: new CustomFormControl("Dirección", null, [
      Validators.required,
      Validators.maxLength(500),
    ]),
    sexo: new CustomFormControl("Género",null, [
      Validators.required
    ]),
    });
  }


  async Save(): Promise<boolean> {

    const missingFields = this.formService.validateForm(this.form);
    if (missingFields.length === 0) {
      return true;
    }

    await this.dialog
      .open(SharedDialogComponent, {
        disableClose: true,
        data: {
          title: 'Missing Required Fields',
          content: this.formService.getValidationMessage(missingFields),
          titleIcon: 'error_outline',
          iconColor: 'blue-icon-color',
          controls: [
            {
              label: 'OK',
              type: 'raised',
              color: 'primary',
              action: 'Ok'
            },
          ],
        } as SharedDialogData,
      })
      .afterClosed()
      .toPromise();

    return false;
  }

}
