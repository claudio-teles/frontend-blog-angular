import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) {}

  getWelcomeMessage = (urlHome: String): Observable<{}> => {
    return this.httpClient.get<{}>(urlHome.toString());
  }
  
}
