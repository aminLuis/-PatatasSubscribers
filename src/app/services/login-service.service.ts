import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';

const URL = environment.API_LOGIN;

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  login_user(user: User):Observable<User>{
    return this.http.post<User>(URL,user)
    .pipe(
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }

}
