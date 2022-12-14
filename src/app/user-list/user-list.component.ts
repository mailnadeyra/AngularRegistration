import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users : User[]=[];

  constructor(private registerService:RegisterService, private router:Router){}
  
  
  ngOnInit(): void {
    this.registerService.getAllUsers().subscribe(data=>{
      this.users=data;
    })
  }
  
  
}
