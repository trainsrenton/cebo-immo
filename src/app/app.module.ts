import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CalculatorCashFlowModule } from './views/calculator-cash-flow/calculator-cash-flow.module';
import { HeaderModule } from './views/shared/header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HeaderModule,
    CalculatorCashFlowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
