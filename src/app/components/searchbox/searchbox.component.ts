import { Component, OnInit } from '@angular/core';

import { InstantSearchService } from '../../services/instantsearch.service';
import { connectSearchBox } from 'instantsearch.js/connectors';

@Component({
  selector: 'app-searchbox',
  template: `
  <input
    type="text"
    [value]="state.query"
    (input)="handleChange($event.target.value)"
  />
`,
  styles: [],
})
export class SearchboxComponent implements OnInit {
  // Define how your component state will look
  state: { query: string; refine: Function } = {
    query: '',
    refine() {},
  };

  constructor(private instantSearchService: InstantSearchService) {}

  ngOnInit() {
    const widget = connectSearchBox(this.updateState);
    this.instantSearchService.search.addWidget(widget());
  }

  updateState = (state, isFirstRendering) => {
    // asynchronous update of the state
    // avoid `ExpressionChangedAfterItHasBeenCheckedError`
    if (isFirstRendering) {
      return Promise.resolve(null).then(() => {
        this.state = state;
      });
    }

    this.state = state;
  };

  handleChange(query) {
    this.state.refine(query);
  }
}
