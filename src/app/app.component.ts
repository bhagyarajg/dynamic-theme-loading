import { Component, Inject, OnInit } from '@angular/core';
import {StyleCaptureService} from './style-capture/style-capture.service';
//import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/platform-browser';
import { StyleConfig } from './style-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public styles:any = {};
  public stylesObj: any ={};
  public selectedFirm: string;
  constructor(private styleService: StyleCaptureService,@Inject(DOCUMENT) private document){
 
  }
  ngOnInit(){
  //console.log(StyleConfig.styleObj);
  //this.stylesObj = StyleConfig.styleObj;
    this.styleService.getStyles().subscribe(
      styles => {
        this.stylesObj = styles;  
      },
      error => {
        console.log(error);
      }
    )
  }
  onChangeFirm(){

   // To simulate the behavior of login , store the reponse from login in the session
   sessionStorage.setItem("firm", this.selectedFirm);
  //search the static config file using session values and get the style guide info specific to each firm
  //for Demo purpose, setting and getting ar happening immediately but in real  we will set the session in login service and get it in main component
   let selectedFirm = sessionStorage.getItem("firm");
   this.styles = this.stylesObj[selectedFirm];
   this.document.getElementById('styleLink').setAttribute('href',this.styles.stylesUrl); 
  }
}
