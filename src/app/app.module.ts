import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { ViewsComponent } from './_components/views/views.component';
import { SidebarComponent } from './_components/sidebar/sidebar.component';
import { CountryComponent } from './_components/country/country.component';
import { MapFilterPipe } from './_pipes/map-filter.pipe';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { HomeComponent } from './_components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewsComponent,
    SidebarComponent,
    CountryComponent,
    MapFilterPipe,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
