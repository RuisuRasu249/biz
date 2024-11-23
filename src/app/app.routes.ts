import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BusinessComponent } from './businesses.component';
import { Business1Component } from './business1.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'businesses',
        component: BusinessComponent
    },
    {
        path: 'businesses/:name',
        component: Business1Component
    }
];
