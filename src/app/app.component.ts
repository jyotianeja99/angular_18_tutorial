import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student';
  constructor(
    private router: Router
  ){}

  showRegistration = true;
  toggleComponents(){
    this.showRegistration = !this.showRegistration;
  }

  refreshStudentView(){
    
  }
 doNavigate():void {
  this.router.navigate(['student']);
 } 

 navigateToPage(){
  this.router.navigate(['/success']);
 }
}
