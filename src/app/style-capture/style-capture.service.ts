import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class StyleCaptureService {

  constructor(private http:Http) { }

  getStyles(selectedFirm): Observable <any[]> {
    let url;
    if (selectedFirm === 'firm1'){
      url='assets/json/style-guide1.json';
    }
    else if(selectedFirm === 'firm2'){
      url='assets/json/style-guide2.json';
    }
    return  this.http.get(url)
                           .map(response => response.json())
                           .catch(error => Observable.throw(error.statusText));
   }
 
}
