import { Dataresponse } from './../models/dataresponse';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../models/categories';
import { FormBuilder } from '@angular/forms';
import { DataresponseCat } from '../models/dataresponse copy';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  base_url_categories = environment.base_url + '/categories/';
  constructor(private http: HttpClient) { }
  addCategory(data: any): Observable<Dataresponse<Categories>> {
    return this.http.post<Dataresponse<Categories>>(this.base_url_categories, data);
  }
  removeCategory(id: string): Observable<Dataresponse<Categories>> {
    return this.http.delete<Dataresponse<Categories>>(this.base_url_categories + 'deleteCategory/' + id);
  }
  updateCategory(id: any, data: any): Observable<Dataresponse<Categories>> {
    return this.http.put<Dataresponse<Categories>>(this.base_url_categories + id, data);
  }
  getAllCategories(): Observable<Dataresponse<Categories>> {
    return this.http.get<Dataresponse<Categories>>(this.base_url_categories);
  }
  getCategories(id: any): Observable<DataresponseCat<Categories>> {
    return this.http.get<DataresponseCat<Categories>>(this.base_url_categories + id);
  }
}