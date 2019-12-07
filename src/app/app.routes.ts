import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightEditComponent } from './flight-booking/flight-edit/flight-edit.component';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-booking',
        loadChildren: () => import('./flight-booking/flight-booking.module')
            .then(m => m.FlightBookingModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
