import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from '../models/student.models';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  students: Student[] = [];
  displaycolumns: string [] = ['FirstName', 'LastName', 'Email', 'PhoneNumber', 'Date of Birth', 'Image', 'Gender', 'City'];

  
  constructor(private studentService: StudentService){
    this.studentService.getAllStudents().subscribe(
      (successResponse) =>{
        this.students = successResponse;
      },
      (errorResponse) => {
        console.log(errorResponse)
      }
    );
  }

}
