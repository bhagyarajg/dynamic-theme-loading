import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StyleCaptureService} from './style-capture/style-capture.service';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,FormsModule,MatButtonModule
  ],
  providers: [StyleCaptureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
