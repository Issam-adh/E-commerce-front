import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dataresponse } from '../models/dataresponse';
import { Subcategories } from '../models/subcategories';

@Injectable({
  providedIn: 'root'
})
export class SubSubcategoriesService {
  base_url_Subcategories = environment.base_url + '/Subcategories';
  constructor(private http: HttpClient) {}
  addSubcategory(data: Subcategories): Observable<Dataresponse<Subcategories>> {
    return this.http.post<Dataresponse<Subcategories>>(this.base_url_Subcategories, data);
  }
  removeSubcategory(id: string): Observable<Dataresponse<Subcategories>> {
    return this.http.delete<Dataresponse<Subcategories>>(this.base_url_Subcategories + '/' + id);
  }
  updateSubcategory(id: string, data: Subcategories): Observable<Dataresponse<Subcategories>> {
    return this.http.put<Dataresponse<Subcategories>>(this.base_url_Subcategories + '/' + id, data);
  }
  getAllSubcategories(): Observable<Dataresponse<Subcategories>> {
    return this.http.get<Dataresponse<Subcategories>>(this.base_url_Subcategories);
  }
}