import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostnewsService {

  constructor(private httpClient: HttpClient) {}

  sendNew(url: String, _new: {}): Observable<{}> {
    return this.httpClient.post<{}>(url.toString(), _new);
  }

}
