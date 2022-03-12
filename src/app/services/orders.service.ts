import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Dataresponse } from '../models/dataresponse';
import { Orders } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
    base_url_Orders = environment.base_url + '/orders/';
    constructor(private http: HttpClient) {}
    addOrder(data: Orders): Observable<Dataresponse<Orders>> {
      return this.http.post<Dataresponse<Orders>>(this.base_url_Orders, data);
    }
    removeOrder(id: string): Observable<Dataresponse<Orders>> {
      return this.http.delete<Dataresponse<Orders>>(this.base_url_Orders + '/' + id);
    }
    updateOrder(id: string, data: Orders): Observable<Dataresponse<Orders>> {
      return this.http.put<Dataresponse<Orders>>(this.base_url_Orders + '/' + id, data);
    }
    getAllOrders(): Observable<Dataresponse<Orders>> {
      return this.http.get<Dataresponse<Orders>>(this.base_url_Orders);
    }
  }
