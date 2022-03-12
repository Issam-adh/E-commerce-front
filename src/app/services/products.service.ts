import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dataresponse } from '../models/dataresponse';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  base_url_products = environment.base_url + '/products/';
  constructor(private http: HttpClient) {}
  addProduct(data: Products): Observable<Dataresponse<Products>> {
    return this.http.post<Dataresponse<Products>>(this.base_url_products, data);
  }
  removeProduct(id: string): Observable<Dataresponse<Products>> {
    return this.http.delete<Dataresponse<Products>>(this.base_url_products + 'deleteProduct/' + id);
  }
  updateProduct(id: string, data: Products): Observable<Dataresponse<Products>> {
    return this.http.put<Dataresponse<Products>>(this.base_url_products + '/' + id, data);
  }
  getAllProducts(): Observable<Dataresponse<Products>> {
    return this.http.get<Dataresponse<Products>>(this.base_url_products);
  }
}