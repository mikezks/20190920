import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-flight-typeahead',
  templateUrl: './flight-typeahead.component.html',
  styleUrls: ['./flight-typeahead.component.css']
})
export class FlightTypeaheadComponent implements OnInit, OnDestroy {

  timerSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.timerSubscription = 
      timer(0, 1000)
        .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
