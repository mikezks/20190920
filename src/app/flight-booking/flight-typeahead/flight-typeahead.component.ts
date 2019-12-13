import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Subscription, Observable } from 'rxjs';
import { map, filter, take, switchMap, debounceTime } from 'rxjs/operators';
import { FlightService } from '../services/abstract-flight.service';
import { Flight } from '../../model/flight';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-flight-typeahead',
  templateUrl: './flight-typeahead.component.html',
  styleUrls: ['./flight-typeahead.component.css']
})
export class FlightTypeaheadComponent implements OnInit, OnDestroy {
  timer$: Observable<number>;
  timerSubscription: Subscription;
  timerControl = new FormControl();

  typeaheadControl = new FormControl();
  flights$: Observable<Flight[]>;
  loading: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.timer$ = timer(0, 1000)
        .pipe(
          map(num => num * 10),
          take(10),
          filter(num => num > 20),
          //switchMap(num => this.load('Graz', 'Hamburg'))
        );

    /* this.timerSubscription = 
      this.timer$.subscribe(console.log);

    this.timer$.subscribe(num => this.timerControl.setValue(num)); */

    this.flights$ =
      this.typeaheadControl.valueChanges
          .pipe(
            filter(value => value.length > 2),
            debounceTime(300),
            switchMap(from => this.load(from))
          );
  }

  load(from: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams().set('from', from);
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http
      .get<Flight[]>(url, { headers, params });
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
