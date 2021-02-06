import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { FormComponent } from './form/form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { TimeCountPipe } from './time-count.pipe';
import { HighlightQuoteDirective } from './highlight-quote.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    FormComponent,
    QuoteDetailsComponent,
    TimeCountPipe,
    HighlightQuoteDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
