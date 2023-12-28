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

  creationError: boolean = false;

  public addCard(): void {
    this.creationError = false;
    try {
      let card = new TombolaCard();
      this.cards.push(card)
    }
    catch {
      this.creationError = true;
    }
  }
}
