import { TestBed } from "@angular/core/testing";
import { FormBuilder, Validators } from "@angular/forms";
import { CustomFormControl } from "../models/custom-form-control";
import { FormsService } from "./forms-service";

describe('MaintainFundFormsService', () => {
  let service: FormsService;
  let formBuilder: FormBuilder;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [FormsService,  FormBuilder],
    });
    service = TestBed.inject(FormsService);
    formBuilder = TestBed.inject(FormBuilder);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  it('getValidationMessage should display missing fields messages', () => {
    const missingFields = ['MISSING FIELDS TEST'];
    const message = service.getValidationMessage(missingFields);
    expect(message).toContain('MISSING FIELDS TEST');
  });

  it('validateForm should return missing fields array', () => {
     const form = formBuilder.group({
       testControl: new CustomFormControl('Test Control', null, Validators.required),
     });

     form?.get('testControl')?.updateValueAndValidity();
     const missingFields = service.validateForm(form);
     expect(missingFields.length).toBe(1);
     expect(missingFields[0]).toBe('Test Control');

   });
});
