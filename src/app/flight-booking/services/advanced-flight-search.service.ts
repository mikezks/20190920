import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Flight } from '../../model/flight';
import { Observable } from 'rxjs';
import { FlightService } from './abstract-flight.service';

@Injectable()
export class AdvancedFlightSearchService  implements FlightService {
  flights: Flight[] = [];
  constructor(private http: HttpClient) {}

  search(from: string, to: string): void {
  //  console.log("I am super advanced");
    this.load(from, to)
      .pipe(
       /* tap((result: HttpResponse<Flight[]>) =>
          console.log('Status Code: ', result.status)
        ),
        tap((result: HttpResponse<Flight[]>) =>
          console.log('Status Headers: ', result.headers)
        ),*/
        map((result: HttpResponse<Flight[]>) => result.body)
      )
      .subscribe(
        result => (this.flights = result),
        error => console.log('Uppps', error)
      );
  }

  private load(from: string, to: string): Observable<HttpResponse<Flight[]>> {
    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams().set('from', from).set('to', to);
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, {
      params,
      headers,
      observe: 'response'
    });
  }
}
