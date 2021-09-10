import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeletenewService {

  constructor(private httpClient: HttpClient) {}

  loadNewId(url: String): Observable<Object> {
    return this.httpClient.get<Object>(url.toString());
  }

  deleteNewId(url: String): Observable<any> {
    return this.httpClient.delete<any>(url.toString());
  }

}
