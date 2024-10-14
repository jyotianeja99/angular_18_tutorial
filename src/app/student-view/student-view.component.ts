import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model'
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrl: './student-view.component.css'
})
export class StudentViewComponent implements OnInit {
  student:Student | null = null;

  constructor(private studentService : StudentService){}

  // ngOnInit(): void {
  //     //check if running in the browser(window object is defined)
  //     if(typeof window !== 'undefined' && window.sessionStorage){
  //     //retrieve storedStudent from session storage when component is initialized.
  //     const storedStudent = sessionStorage.getItem('student');
  //     if(storedStudent){
  //       this.student=JSON.parse('storedStudent'); //parse the JSON back to a student object.
  //     }
  //   }
  // }

  ngOnInit(): void {
    this.refreshData(); // Retrieve data on component initialization
  }

// refreshData(): void{
//   const storedStudent = sessionStorage.getItem('student');
//   console.log('Stored Student:',storedStudent);
//   if(storedStudent){
//     this.student = JSON.parse(storedStudent);
//     console.log('Parsed Student:',this.student);
//   }
// }

// refreshData(): void {
//   const storedStudent = sessionStorage.getItem('student');
//   console.log('Stored Student:', storedStudent); // Debug log
//   if (storedStudent) {
//     this.student = JSON.parse(storedStudent); // Parse and assign the student data
//     console.log('Parsed Student:', this.student); // Debug log
//   } else {
//     console.log('No student data found in session storage.'); // Debug log
//   }
// }

refreshData(): void{
  this.student = this.studentService.getStudent();
  console.log('Retrieved student:',this.student);
}

}
