import { BrowserModule } from '@angular/platform-browser';
import { FormsService } from './services/forms-service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form-component/form-component';
import { SharedDialogComponent } from './components/shared-dialog-component/shared-dialog-component';

@NgModule({
  declarations: [AppComponent, SharedDialogComponent, FormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [FormsService],
  entryComponents: [MatDialogModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
