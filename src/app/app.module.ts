import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HitsComponent } from './components/hits/hits.component';
import { InstantSearchService } from './services/instantsearch.service';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { RefinementListComponent } from './components/refinement-list/refinement-list.component';

@NgModule({
  declarations: [AppComponent, HitsComponent, SearchboxComponent, RefinementListComponent],
  imports: [BrowserModule],
  providers: [InstantSearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
