import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,Route } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup| any;
  constructor(private fb:FormBuilder,private router:Router) { 
    this.loginForm = new FormGroup({
      Username: new FormControl('', [Validators.required,Validators.pattern('admin', ),]),
      Password: new FormControl('', [Validators.required,Validators.pattern('admin')])
    });
}
  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.loginForm.valid){
      return;
    }
    localStorage.setItem('login',this.loginForm.value)
    this.router.navigate(['/admin'])
  }

}
