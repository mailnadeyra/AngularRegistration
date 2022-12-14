import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginUser } from '../login-user';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  
  user:User = new User();
 
  users : User[]=[];
  
  constructor(private registerService:RegisterService, private router:Router){}
  
  
  ngOnInit(): void {
    this.registerService.getAllUsers().subscribe(data=>{
      this.users=data;
    })
    
  }
  userRegister(){
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(_data=>{
      alert("Success");
      this.goToOtp();
      
    },_error=>alert("Sorry"));
    
  }
  goToOtp(){
    this.router.navigate(['/otp']);
  }

  verifyOTP(){
    this.router.navigate(['/regSuccess']);
  }
  
  
 
 
 

}
