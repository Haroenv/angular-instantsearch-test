import { Injectable } from '@angular/core';
import instantsearch from 'instantsearch.js/instantsearch';

@Injectable()
export class InstantSearchService {
  search = instantsearch({
    appId: 'latency',
    apiKey: '3d9875e51fbd20c7754e65422f7ce5e1',
    indexName: 'bestbuy',
    urlSync: true,
  });

  constructor() {}
}
