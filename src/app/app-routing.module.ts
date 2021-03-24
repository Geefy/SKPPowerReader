import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReaderControllerComponent } from '../app/reader-controller/reader-controller.component';
import { ClickedReaderComponent } from '../app/clicked-reader/clicked-reader.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: '', component: LocationComponent },
  { path: 'readers', component: ReaderControllerComponent },
  { path: 'clicked', component: ClickedReaderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
