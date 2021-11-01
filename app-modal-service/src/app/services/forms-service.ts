import { Injectable } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { CustomFormControl } from '../models/custom-form-control';

@Injectable()
export class FormsService {

  validateForm(form: FormGroup): Array<string> {
    const missingFields = [];
    form.markAllAsTouched();
    const controls = form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        const control = controls[name] as CustomFormControl;
        if (control && control.label) {
          missingFields.push(control.label);
        }
      }
    }
    return missingFields;
  }

  getValidationMessage(missingFields: Array<string>): string {
    const message = `<div>Please enter the required data:</div><ul class='missing-list'>${missingFields
      .map((field) => `<li>${field}</li>`)
      .join('')}</ul> <div>Please complete all required fields.</div>`;

    return message;
  }

}
