import { Component, OnInit } from '@angular/core';

export interface Card {
  id: number;
  title: string;
  status: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  cards: Card[] = [];

  ngOnInit(): void {
    for (let i = 1; i < 10; i++) {
      const card = {} as Card;

      card.id = i;
      card.title = `${i} card`;
      card.status = (Math.random() < 0.5);

      this.cards.push(card);
    }
  }

  createCard(e: any): boolean {

    const data: any = new FormData(e.target);

    const card = {
      id: data.get('id'),
      title: data.get('title'),
      status: data.get('status') === null ? false : true
    } as Card;
    this.cards.push(card);

    return false;

  }

  deleteCard(id: number): void {
    this.cards = this.cards.filter((card) => card.id !== id);
  }

}
