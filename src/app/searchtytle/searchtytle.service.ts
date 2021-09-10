import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchtytleService {

  constructor(private httpClient: HttpClient) {}

  searchNewTitle = (url: String, title: String): Observable<[]> => {
    return this.httpClient.get<[]>(url.toString(), {params: {'title': title.toString()}});
  }

}
