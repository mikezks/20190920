import { Component } from '@angular/core';
import { Flight } from '../../model/flight';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { FlightService } from '../services/abstract-flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent {
  from = 'Hamburg';
  to = 'Graz';

  public get flights(): Flight[] {
    return this.service.flights;
  }

  selected: Flight;

  basket: object = {
    '3': true,
    '5': true
  };

  constructor(private service: FlightService) {}

  search(): void {
    this.service.search(this.from, this.to);
  }

  selectFlight(flight: Flight): void {
    this.selected = flight;
  }
}
