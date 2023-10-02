import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SezioneAnagraficaComponent } from './sezione-anagrafica/sezione-anagrafica.component';
import { SezioneStudiComponent } from './sezione-studi/sezione-studi.component';
import { SezioneLavoriComponent } from './sezione-lavori/sezione-lavori.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      //{ path: '', component: SezioneAnagraficaComponent },
      { path: 'sezione/studi', component: SezioneStudiComponent },
      { path: 'sezione/lavori', component: SezioneLavoriComponent }
    ])
  ],
  declarations: [
    AppComponent,
    SezioneAnagraficaComponent,
    SezioneStudiComponent,
    SezioneLavoriComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/