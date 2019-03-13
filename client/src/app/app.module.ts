import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ParlamentarService } from './services/parlamentar.service';
import { ParlamentarContainerComponent } from './components/parlamentar-container/parlamentar-container.component';
import { ParlamentarCardComponent } from './components/parlamentar-container/parlamentar-card/parlamentar-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ParlamentarContainerComponent,
    ParlamentarCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyLoadImageModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [
    ParlamentarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
