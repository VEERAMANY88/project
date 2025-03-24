import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'home-page',
        component:HomePageComponent
    }
];
