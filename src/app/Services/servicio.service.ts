import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Regalos } from '../Models/regalos';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  serviceURL:string;

  constructor( private http: HttpClient) { this.serviceURL="http://localhost:3000/regalos"}


addRegalo(regalo: Regalos):Observable<Regalos>
{
return this.http.post<Regalos>(this.serviceURL, regalo)
}

getRegalo():Observable<Regalos[]>
{
return this.http.get<Regalos[]>(this.serviceURL)
}


deleteRegalo(regalo: Regalos):Observable<Regalos>
{
return this.http.delete<Regalos>(this.serviceURL+'/'+ regalo.id)
}
}




