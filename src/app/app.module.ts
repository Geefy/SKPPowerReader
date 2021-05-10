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
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { StatisticControllerComponent } from './statistic-controller/statistic-controller.component';
import { StatisticComponent } from './statistic/statistic.component';
import { ClickedStatsComponent } from './clicked-stats/clicked-stats.component';
import { FilterPipePipe } from './filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WaterReaderComponent,
    ReaderControllerComponent,
    ClickedReaderComponent,
    LocationComponent,
    LocationControllerComponent,
    StatisticControllerComponent,
    StatisticComponent,
    ClickedStatsComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({ echarts }),
    AppRoutingModule,
    RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
