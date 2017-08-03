import { TestBed, inject } from '@angular/core/testing';

import { InstantsearchService } from './instantsearch.service';

describe('InstantsearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstantsearchService]
    });
  });

  it('should be created', inject([InstantsearchService], (service: InstantsearchService) => {
    expect(service).toBeTruthy();
  }));
});
