import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AppComponent } from './app.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { StudentSuccessComponent } from './student-success/student-success.component';

const routes: Routes = [
  {path:'student',component: StudentDetailsComponent},
  // {path:'app', component: AppComponent},
  {path:'marks',component:StudentMarksComponent},
  {path:'success',component:StudentSuccessComponent},
  // {path:
  //   ''
  //   , redirectTo:
  //   'student'
  //   , pathMatch:
  //   'full'
  //   }
  {path:
    ''
    , redirectTo:
    'register'
    , pathMatch:
    'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
