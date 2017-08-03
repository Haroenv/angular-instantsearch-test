import { Component, AfterViewInit } from '@angular/core';

import { InstantSearchService } from './services/instantsearch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  constructor(private instantSearchService: InstantSearchService) {}

  ngAfterViewInit() {
    this.instantSearchService.search.start();
  }
}
