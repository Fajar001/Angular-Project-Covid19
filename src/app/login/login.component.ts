import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { AuthService } from './../auth/auth.service';
import { Login } from './login';
import { Router } from '@angular/router';
import { CovidService } from 'app/covid/covid.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;                    
  private formSubmitAttempt: boolean;
  login:Login
  constructor(private loginService: CovidService,private router: Router) { }

  username:string
  ngOnInit(): void {
  }

  user(){
    this.loginService.getUser(this.username).subscribe(data=>{
      console.log(data)  
    },
    error=>console.log(error));
  }

  confirm(){
    if(this.login.username=="" && this.login.password==""){
      console.log("Gagal");
    }else{
      if(this.login.roles=="admin"){
        this.router.navigateByUrl('/home');
      }else{
        this.router.navigateByUrl('');
      }
    }
  }
}
