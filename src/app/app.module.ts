import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AboutComponentComponent } from './about-component/about-component.component';
import { OffersComponentComponent } from './offers-component/offers-component.component';
import { SeatsComponentComponent } from './seats-component/seats-component.component';
import { DestinationsComponentComponent } from './destinations-component/destinations-component.component';
import { BusquedaComponentComponent } from './busqueda-component/busqueda-component.component';
import { CommonModule } from '@angular/common';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'about', component: AboutComponentComponent },
  { path: 'offers', component: OffersComponentComponent },
  { path: 'seats', component: SeatsComponentComponent },
  { path: 'destinations', component: DestinationsComponentComponent },
  { path: 'busqueda', component: BusquedaComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    AboutComponentComponent,
    OffersComponentComponent,
    SeatsComponentComponent,
    DestinationsComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
