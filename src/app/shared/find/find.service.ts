import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindService {

  constructor(private http: HttpClient) { }

  onFindPathByCEP(cep: string) {
    return this.http.get('https://api.postmon.com.br/v1/cep/' + cep)
    .toPromise();
  }
}
