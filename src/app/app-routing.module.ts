import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { CountryComponent } from './_components/country/country.component';
import { ViewsComponent } from './_components/views/views.component';


import routes from './app-routes';
// const routes: Routes = [];
// const routes: Routes = [
//   {
//       path: '',
//       redirectTo: 'home',
//       pathMatch: 'full' 
//   },
//   {
//       path: 'home',
//       component: HomeComponent
//   },
//   {
//       path: 'dashboard',
//       component: DashboardComponent
//   },
//   {
//       path: 'countries',
//       component: CountryComponent
//   },
//   {
//       path: 'views',
//       component: ViewsComponent
//   }
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
