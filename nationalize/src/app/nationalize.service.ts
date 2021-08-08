import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NationalizeService {

  constructor(private http: HttpClient) { }

  url = 'https://api.nationalize.io?name=';

  public getNationalizes(name: any): Observable<any> {
    return this.http.get(this.url + name);
  }
}
