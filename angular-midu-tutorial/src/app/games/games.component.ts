import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent {
  @Input() userName: string = ''

  gamesList = [
    {
      id: 1,
      name: 'Uncharted-4',
    },
    {
      id: 2,
      name: 'Horizon Zero down',
    },
    {
      id: 3,
      name: 'The last of us',
    },
  ];
}
