import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReaderControllerComponent } from '../app/reader-controller/reader-controller.component';
import { ClickedReaderComponent } from '../app/clicked-reader/clicked-reader.component';
import { LocationControllerComponent } from './location-controller/location-controller.component';
import { StatisticControllerComponent } from './statistic-controller/statistic-controller.component';
import { ClickedStatsComponent } from './clicked-stats/clicked-stats.component';

const routes: Routes = [
  { path: '', component: LocationControllerComponent },
  { path: 'readers', component: ReaderControllerComponent },
  { path: 'clicked', component: ClickedReaderComponent },
  { path: 'statistic', component: StatisticControllerComponent },
  { path: 'clickedStats', component: ClickedStatsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
