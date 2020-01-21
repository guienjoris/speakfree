import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import {ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import {map} from 'rxjs/operators';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'Speak Free';
    
  constructor(public auth: AuthenticationService, private route: ActivatedRoute) {
    console.log(route.url.pipe(map(segments => segments.join(''))))
  }

  ngOnInit(){
  }
}
