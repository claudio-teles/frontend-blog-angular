import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostviewingService {

  constructor(private httpClient: HttpClient) {}

  listNewsPage = (url: String, start: String, finish: String): Observable<[]> => {
    return this.httpClient.get<[]>(url.toString(), {params: {'topOfPage': start.toString(), 'endOfPage': finish.toString()}});
  }

}
