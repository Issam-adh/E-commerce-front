import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dataresponse } from '../models/dataresponse';
import { Deliveries } from '../models/deliveries';

@Injectable({
  providedIn: 'root'
})
export class DeliveriesService {
  base_url_Deliveries = environment.base_url + '/Deliveries';
  constructor(private http: HttpClient) {}
  addDelivery(data: Deliveries): Observable<Dataresponse<Deliveries>> {
    return this.http.post<Dataresponse<Deliveries>>(this.base_url_Deliveries, data);
  }
  removeDelivery(id: string): Observable<Dataresponse<Deliveries>> {
    return this.http.delete<Dataresponse<Deliveries>>(this.base_url_Deliveries + '/' + id);
  }
  updateDelivery(id: string, data: Deliveries): Observable<Dataresponse<Deliveries>> {
    return this.http.put<Dataresponse<Deliveries>>(this.base_url_Deliveries + '/' + id, data);
  }
  getAllDeliveries(): Observable<Dataresponse<Deliveries>> {
    return this.http.get<Dataresponse<Deliveries>>(this.base_url_Deliveries);
  }
}