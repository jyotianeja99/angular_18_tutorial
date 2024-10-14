import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private student: Student | null = null;

  setStudent(student: Student){
    this.student=student;
    sessionStorage.setItem('student',JSON.stringify(student));

  }

  getStudent(): Student | null {
    if(!this.student){
      const storedStudent = sessionStorage.getItem('student');
      if(storedStudent){
        this.student = JSON.parse(storedStudent);
      }
    }
    return this.student;
  }

  clearStudent(){
    this.student = null;
    sessionStorage.removeItem('student');
  }

  

  //constructor() { }
}
