import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs/Observable'; //<= NOT NEEDED (generates an error)

const HttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http:HttpClient) { }

  getBikes(){
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/bikes', {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)});
  }

  getBike(id: number){
    return this.http.get('/server/api/v1/bikes/' + id, this.getHeaderWithBearer());
  }

  createBikeRegistration(bike){
    let body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes', body, HttpOptions);
  }


  private getHeaderWithBearer() {
    let token = localStorage.getItem('access_token');
    return {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)};
  }
}
