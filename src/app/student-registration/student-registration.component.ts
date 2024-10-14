// src/app/student-registration/student-registration.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css'],
})
export class StudentRegistrationComponent {

  @Output() studentRegistered = new EventEmitter<void>();

  constructor(private studentService: StudentService){}
  

  onSubmit(form: NgForm) {
    if (form.valid) {
      const student = new Student(
        form.value.firstName,
        form.value.lastName,
        form.value.email,
        form.value.phoneNumber
      );

      this.studentService.setStudent(student);
      console.log('Student data saved to sessionStorage:', student);
      //sessionStorage.setItem('student', JSON.stringify(student));
      //console.log('Student Registered:', student);
      //alert('Student Registered Successfully!');
      this.studentRegistered.emit();
      form.reset(); // Reset the form after submission
    }
  }
}

