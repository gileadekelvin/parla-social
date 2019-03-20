import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ParlamentarContainerComponent,
    ParlamentarCardComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyLoadImageModule,
    NgbModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [
    ParlamentarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
