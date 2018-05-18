import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StyleCaptureService} from './style-capture/style-capture.service';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,FormsModule
  ],
  providers: [StyleCaptureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
