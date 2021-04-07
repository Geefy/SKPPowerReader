import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WaterReaderComponent } from './water-reader/water-reader.component';
import { ReaderControllerComponent } from './reader-controller/reader-controller.component';
import { ClickedReaderComponent } from './clicked-reader/clicked-reader.component';
import { LocationComponent } from './location/location.component';
import { LocationControllerComponent } from './location-controller/location-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    WaterReaderComponent,
    ReaderControllerComponent,
    ClickedReaderComponent,
    LocationComponent,
    LocationControllerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
