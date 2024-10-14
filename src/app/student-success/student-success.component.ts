import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-success',
  templateUrl: './student-success.component.html',
  styleUrl: './student-success.component.css'
})
export class StudentSuccessComponent {
  name = "Jyoti Aneja"
  constructor(
    private router:Router
  ){}
doNavigate(){
  this.router.navigate(['marks'])
}

}
