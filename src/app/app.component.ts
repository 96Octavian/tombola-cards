import { Component } from '@angular/core';
import { TombolaCard } from './tombola-card/tombola-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tombola!';

  cards: TombolaCard[] = []

  public addCard():void{
    this.cards.push(new TombolaCard())
  }
}
