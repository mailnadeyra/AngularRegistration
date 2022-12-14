import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OtpComponent } from './otp/otp.component';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl="http://localhost:8081/user";
  constructor(private httpclient:HttpClient) { 

  }

  registerUser(user:User):Observable<Object>{
    console.log(user)
    return this.httpclient.post(`${this.baseUrl}`,user)
  }
 getAllUsers():Observable<User[]>{
  return this.httpclient.get<User[]>(`${this.baseUrl}`)
 }
}
