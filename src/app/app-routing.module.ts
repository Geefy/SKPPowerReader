import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReaderControllerComponent } from '../app/reader-controller/reader-controller.component';
import { ClickedReaderComponent } from '../app/clicked-reader/clicked-reader.component';
import { LocationControllerComponent } from './location-controller/location-controller.component';

const routes: Routes = [
  { path: '', component: LocationControllerComponent },
  { path: 'readers', component: ReaderControllerComponent },
  { path: 'clicked', component: ClickedReaderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
