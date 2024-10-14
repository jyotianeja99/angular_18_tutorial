import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrl: './student-marks.component.css'
})
export class StudentMarksComponent {
  constructor(
    private router:Router
  ){}
  doNavSuccess(){
    this.router.navigate(['success'])
  }

}



