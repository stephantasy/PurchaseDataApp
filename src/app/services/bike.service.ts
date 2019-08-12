import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable'; <= NOT NEEDED (generates an error)

const HttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http:HttpClient) { }

  getBikes(){
    return this.http.get('/server/api/v1/bikes');
  }

  getBike(id: number){
    return this.http.get('/server/api/v1/bikes/' + id);
  }

  createBikeRegistration(bike){
    let body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes', body, HttpOptions);
  }

}
