import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsService } from "src/app/services/forms-service";
import { FormComponent } from "./form-component";

describe('MaintainFundWizardComponent', () => {

  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  const mockFormsService = jasmine.createSpyObj('FormsService', [
    'validateForm',
    'getValidationMessage',
  ]);
  let formBuilder: FormBuilder;
  const setMocks = () => {
    mockFormsService.validateForm.and.returnValue(false);
    mockFormsService.getValidationMessage.and.returnValue('Error');
  };

  beforeEach(async () => {
    setMocks();
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [
        MatDialogModule,
        BrowserAnimationsModule,
      ],
      providers: [
        MatDialog,
        { provide: FormsService, useValue: mockFormsService },
        FormBuilder
      ],
    }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    formBuilder  = TestBed.inject(FormBuilder);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('perform should validate form and show modal on errors', () => {
    component.form = formBuilder.group({
      testControl: new FormControl(
        {
          value: ['mock'],
          disabled: false,
        },
        Validators.required
      ),
    });

    component.Save();
    fixture.detectChanges();
    expect(component.dialog).toBeInstanceOf(MatDialog);

  });
})
