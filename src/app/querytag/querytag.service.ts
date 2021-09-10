import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuerytagService {

  constructor(private httpClinet: HttpClient) {}

  searchTag = (url: String, tags: String): Observable<[]> => {
    return this.httpClinet.get<[]>(url.toString(), {params: {'tags': tags.toString()}});
  }

}
