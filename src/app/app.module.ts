import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { StudentSuccessComponent } from './student-success/student-success.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { FormsModule } from '@angular/forms';
import { StudentViewComponent } from './student-view/student-view.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentMarksComponent,
    StudentSuccessComponent,
    StudentRegistrationComponent,
    StudentViewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
