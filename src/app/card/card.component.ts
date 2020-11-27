import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../app.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent {

    @Input() card: Card;

    @Output() deleteCard = new EventEmitter();

}
