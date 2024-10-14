import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {

  constructor(
    private router:Router
  ){}
doNavigate(){
  this.router.navigate(['marks'])
}

}
