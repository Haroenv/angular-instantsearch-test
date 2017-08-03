import { Component, OnInit } from '@angular/core';

import { InstantSearchService } from '../../services/instantsearch.service';
import { connectRefinementList } from 'instantsearch.js/connectors';

@Component({
  selector: 'app-refinement-list',
  template: `
<div>
  <label *ngFor="let item of (state.items ? state.items.slice(0,10): [])" (click)="handleChange($event.target.value)">

    <input type="checkbox"
          [value]="item.value"
          [checked]="item.isRefined" />
  {{item.value}}
  <span>{{item.count}}</span>

  </label>
</div>`,
  styles: [],
})
export class RefinementListComponent implements OnInit {
  // Define how your component state will look
  state: { items: {}[]; refine: Function } = {
    items: [],
    refine() {},
  };

  constructor(private instantSearchService: InstantSearchService) {}

  ngOnInit() {
    // Create a widget which will call `this.updateState` whenever
    // something changes on the search state itself.
    const widget = connectRefinementList(this.updateState);

    // Register the Hits widget into the instantSearchService search instance.
    this.instantSearchService.search.addWidget(
      widget({ attributeName: 'category' })
    );
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
