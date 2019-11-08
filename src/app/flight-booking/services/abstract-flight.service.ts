import { Injectable } from '@angular/core';
import { DefaultFlightSearchService } from './flight-search.service';
import { Flight } from '../../model/flight';
import { HttpClient } from '@angular/common/http';
import { AdvancedFlightSearchService } from './advanced-flight-search.service';

/*@Injectable({
  providedIn: 'root',
  useFactory: (http: HttpClient) => {
    if (false) {
      return new DefaultFlightSearchService(http);
    } else {
      return new AdvancedFlightSearchService(http);
    }
  },
  deps: [HttpClient]
})*/
export abstract class FlightService {
  abstract flights: Flight[];
  abstract search(from: string, to: string);
}
