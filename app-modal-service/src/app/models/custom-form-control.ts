import {
  AbstractControlOptions,
  AsyncValidatorFn,
  FormControl,
  ValidatorFn,
} from '@angular/forms';

export class CustomFormControl extends FormControl {
  label: string;

  constructor(
    label: string,
    formState?: any,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(formState, validatorOrOpts, asyncValidator);
    this.label = label;
  }
}
