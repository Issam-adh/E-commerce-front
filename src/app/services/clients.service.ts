import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clients } from '../models/clients';
import { Dataresponse } from '../models/dataresponse';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  base_url_Clients = environment.base_url + '/clients/';
  constructor(private http: HttpClient) {}
  addClient(data: Clients): Observable<Dataresponse<Clients>> {
    return this.http.post<Dataresponse<Clients>>(this.base_url_Clients, data);
  }
  removeClient(id: string): Observable<Dataresponse<Clients>> {
    return this.http.delete<Dataresponse<Clients>>(this.base_url_Clients + '/' + id);
  }
  updateClient(id: string, data: Clients): Observable<Dataresponse<Clients>> {
    return this.http.put<Dataresponse<Clients>>(this.base_url_Clients + '/' + id, data);
  }
  getAllClients(): Observable<Dataresponse<Clients>> {
    return this.http.get<Dataresponse<Clients>>(this.base_url_Clients);
  }
}