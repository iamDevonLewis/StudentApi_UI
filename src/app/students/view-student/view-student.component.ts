import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student.models';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit{

  studentId: string | undefined  | null;
  student: Student = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0,
    dateOfBirth: '',
    imageUrl: '',
    genderId: '',
    gender:{
      id: '',
      description: ''
    },
    address: {
      id: '',
      city: '',
      street: '',
      state: '',
      studentid: ''
    }
  }

  constructor(private readonly studentService: StudentService, 
    private readonly route: ActivatedRoute){}


  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.studentId = params.get('id');

        if(this.studentId){
          this.studentService.getStudent(this.studentId)
          .subscribe(
            (successResponse) => {
              this.student = successResponse;
            }
          );
        }
      }
    );
  }
}
