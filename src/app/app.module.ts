import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { TestCanvasComponent } from './test-canvas/test-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    DoughnutChartComponent,
    TestCanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
