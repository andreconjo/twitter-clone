import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TweetsComponent } from './tweets/tweets.component';
import { ThrendingComponent } from './thrending/thrending.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent,
    ThrendingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
