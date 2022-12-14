import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogUserService } from '../log-user.service';
import { LoginUser } from '../login-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  loginUser:LoginUser = new LoginUser();
  
  constructor(private logUserService :LogUserService, private router: Router){}

  ngOnInit(): void {
    
  }
  
  login(){
    console.log(this.loginUser)
    this.logUserService.login(this.loginUser).subscribe(data=>{
      alert("Login Successfully")
      this.router.navigate(['/userList'])


    },error=>alert("User not Found"));
  }
  
}
