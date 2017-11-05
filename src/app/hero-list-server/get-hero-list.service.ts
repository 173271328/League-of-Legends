import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class GetHeroListService {
  private headers = new Headers({ 'DAIWAN-API-TOKEN': '434A9-27B9A-2F5AA-9D94F' });
  private GetHeroListUrl = '/lol-api/champion';  
  
  constructor(private http: Http) {

  }
  GetHeroList() {
    return this.http.get(this.GetHeroListUrl, { headers: this.headers })
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}