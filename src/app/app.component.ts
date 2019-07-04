import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'twitter-clone';

  public inFocus: boolean

  focus() {
    this.inFocus = !this.inFocus
  }
}
