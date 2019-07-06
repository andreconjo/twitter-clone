import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'twitter-clone';

  public inFocus: boolean = false

  
  public news: any[] = [{
    name: "Andre Conjo",
    username: "@andreconjo",
    tweet: "Estudando Front-End com Angular8 e API Com Django Rest Framework."
  }]

  focus() {
    this.inFocus = !this.inFocus
  }

  pushTweet(tweet: string) {
    console.log(tweet)
    this.news.push({
      name: "Andre Conjo",
      username: "@andreconjo",
      tweet: tweet
    })
    this.news.reverse();
  }
}
