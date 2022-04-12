import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasehttpService {

  constructor(private http: HttpClient) { }


  get(url: string) {
    console.log(`http-get operation ${url}`);
    return this.http.get(url);
  }

  post(url: string, payload: any, headers: HttpHeaders) {
    return this.http.post(url, payload, { headers: headers });
  }


}
