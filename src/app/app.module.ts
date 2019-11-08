import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FlightService } from './flight-booking/services/abstract-flight.service';
import { DefaultFlightSearchService } from './flight-booking/services/flight-search.service';
import { AdvancedFlightSearchService } from './flight-booking/services/advanced-flight-search.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrtPipe } from './ort.pipe';

@NgModule({
  declarations: [
    AppComponent,    
    SidebarComponent,
    NavbarComponent,
    FlightSearchComponent,
    OrtPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: FlightService,
      useFactory: (http: HttpClient) => {
        if (false) {
          return new DefaultFlightSearchService(http);
        } else {
          return new AdvancedFlightSearchService(http);
        }
      },
      deps: [HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
