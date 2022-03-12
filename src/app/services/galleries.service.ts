import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dataresponse } from '../models/dataresponse';
import { Galleries } from '../models/galleries';

@Injectable({
  providedIn: 'root'
})
export class GalleriesService {
  base_url_galleries = environment.base_url + '/Galleries';
  constructor(private http: HttpClient) {}
  addGallery(data: Galleries): Observable<Dataresponse<Galleries>> {
    return this.http.post<Dataresponse<Galleries>>(this.base_url_galleries, data);
  }
  removeGallery(id: string): Observable<Dataresponse<Galleries>> {
    return this.http.delete<Dataresponse<Galleries>>(this.base_url_galleries + '/' + id);
  }
  updateGallery(id: string, data: Galleries): Observable<Dataresponse<Galleries>> {
    return this.http.put<Dataresponse<Galleries>>(this.base_url_galleries + '/' + id, data);
  }
  getAllGalleries(): Observable<Dataresponse<Galleries>> {
    return this.http.get<Dataresponse<Galleries>>(this.base_url_galleries);
  }
}