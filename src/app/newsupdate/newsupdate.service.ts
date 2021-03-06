import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsupdateService {

  constructor(private httpClient: HttpClient) {}

  getNew(url: String): Observable<Object> {
    return this.httpClient.get<Object>(url.toString());
  }

  updateNew(url: String, _new: Object): Observable<Object> {
    return this.httpClient.put<Object>(url.toString(), _new);
  }

}
