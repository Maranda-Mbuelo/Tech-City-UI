import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { IUser, IUserEdit } from 'src/interfaces/IUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.apiBaseUrl + '/api/User/');
  }

  getUserById(id: string): Observable<IUser>{
    return this.http.get<IUser>(this.apiBaseUrl + '/api/User/' + id);
  }

  addUser(user: IUser): Observable<IUser>{
    return this.http.post<IUser>(this.apiBaseUrl + '/api/User/', user)
  }

  editUser(id: string, updatedUser: IUserEdit): Observable<IUserEdit>{
    return this.http.put<IUserEdit>(this.apiBaseUrl + '/api/User/' + id, updatedUser);
  }

  deleteUser(id: string): Observable<IUser>{
    return this.http.delete<IUser>(this.apiBaseUrl + '/api/User/' + id);
  }


}
