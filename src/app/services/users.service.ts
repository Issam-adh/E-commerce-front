import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dataresponse } from '../models/dataresponse';
import { Users } from '../models/users';
import { FormBuilder } from '@angular/forms';
import { DataresponseUs } from '../models/dataresponse copy 2';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  base_url_users = environment.base_url + '/users/';
  constructor(private http: HttpClient) {}
  addUser(data: any): Observable<Dataresponse<Users>> {
    return this.http.post<Dataresponse<Users>>(this.base_url_users, data);
  }
  removeUser(id: string): Observable<Dataresponse<Users>> {
    return this.http.delete<Dataresponse<Users>>(this.base_url_users + 'deleteUser/' + id);
  }
  updateUser(id: string, data: any): Observable<Dataresponse<Users>> {
    return this.http.put<Dataresponse<Users>>(this.base_url_users + id, data);
  }
  getAllUsers(): Observable<Dataresponse<Users>> {
    return this.http.get<Dataresponse<Users>>(this.base_url_users);
  }
  getUsers(id: any): Observable<DataresponseUs<Users>> {
    return this.http.get<DataresponseUs<Users>>(this.base_url_users + id);
  }
}
