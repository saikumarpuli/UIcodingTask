import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted = false;
  public errorMessage: string = "Invalid email or password";
  public flag: boolean = false

  constructor(private formBuilder: FormBuilder, private router: Router,) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['hemsnanda89@gmail.com', [Validators.required,Validators.pattern("^[\\w\\.=-]+@[\\w\\.-]+\\.[\\w]{2,3}$")]],
      password: ['hemshatelove', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }


  onSubmit(formdata) {
    this.submitted = true;
    console.log(formdata);
    this.router.navigate(['/homepage']);
  }

  register() {
    this.router.navigate(['/registration']);
  }
}
