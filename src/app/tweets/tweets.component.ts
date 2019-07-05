import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.sass']
})
export class TweetsComponent implements OnInit {

  @Input()
  public item: any = {
    name: "Carregando...",
    username: "",
    tweet: "Carregando..."
  }
  constructor() { }

  ngOnInit() {
  }

}
