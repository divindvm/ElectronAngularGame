import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/do';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
time:number = 100;

  url = "https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&cc_load_policy=1&disablekb=1&start="+ (this.time).toString() +"&color=white";

  constructor(
    private hostElement: ElementRef,
  ) { }

  ngOnInit(){
  const iframe = this.hostElement.nativeElement.querySelector('iframe');
  iframe.src = this.url;
  }

  reload(){
    const iframe = this.hostElement.nativeElement.querySelector('iframe');
    this.url = "https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&cc_load_policy=1&disablekb=1&start="+ (this.time).toString() +"&color=white";
    iframe.src = this.url;
  }

}
