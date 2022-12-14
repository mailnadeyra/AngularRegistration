import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from './login-user';

@Injectable({
  providedIn: 'root'
})
export class LogUserService {
  baseUrl="http://localhost:8081/login";
  constructor(private httpClient : HttpClient) { }

  login(loginUser:LoginUser):Observable<Object>{
    console.log(loginUser);
    return this.httpClient.post(`${this.baseUrl}`,loginUser)
  }
}
