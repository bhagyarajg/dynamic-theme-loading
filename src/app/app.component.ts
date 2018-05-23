import { Component, Inject } from '@angular/core';
import {StyleCaptureService} from './style-capture/style-capture.service';
//import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public styles:any = {};
  public selectedFirm: string;
  constructor(private styleService: StyleCaptureService,@Inject(DOCUMENT) private document){
 
  }
  onChangeFirm(){
    console.log(this.selectedFirm); 
    this.styleService.getStyles(this.selectedFirm).subscribe(
      styles => {
        this.styles = styles;
        this.document.getElementById('styleLink').setAttribute('href',this.styles.stylesUrl);
      }
    )
  }
}
