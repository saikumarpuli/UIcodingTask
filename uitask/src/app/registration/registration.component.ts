import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  AddResourcesForm:FormGroup;
  submitted=false;
  AddResoursedata;
  constructor(private formBuilder:FormBuilder,private router: Router) { }

  ngOnInit() {
    this.AddResourcesForm=this.formBuilder.group({
      studentId:['',[Validators.required]],
      studentName:['',[Validators.required]],
      email:['',[Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      mobile:[''],
      class:['',[Validators.required]],
      enrollYear:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4)]],
      city:['',[Validators.required]],
      country:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
      cpassword:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
    })
  }
  get f(){
    return this.AddResourcesForm.controls;
  }

  onSubmit(value) {
    this.submitted = true;
    this.AddResoursedata=value;
    if (this.AddResourcesForm.invalid) {
      return;
    } else {
      console.log(value);
      this.router.navigate(['/login']);
    }
  }
}
