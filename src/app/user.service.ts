import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private apiUrl= 'https://jsonplaceholder.typicode.com/users' ;

  constructor(private http:HttpClient) { }

  updateUser(id:number, updatedUserData:
    any):Observable<any>{
      return this.http.put(`${this.apiUrl}/${id}`, updatedUserData)
    }

}
