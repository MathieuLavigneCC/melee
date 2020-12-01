import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImputationsComponent } from './imputations/imputations.component';
import { DureeComponent } from './duree/duree.component';
import {FormsModule} from '@angular/forms';
import { ImputationComponent } from './imputation/imputation.component';

@NgModule({
  declarations: [
    AppComponent,
    ImputationsComponent,
    DureeComponent,
    ImputationComponent,
    ImputationComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
