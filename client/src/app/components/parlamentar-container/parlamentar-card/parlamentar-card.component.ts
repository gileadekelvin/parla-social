import { Component, OnInit, Input } from '@angular/core';

import { Parlamentar } from '../../../models/Parlamentar.model';

@Component({
  selector: 'app-parlamentar-card',
  templateUrl: './parlamentar-card.component.html',
  styleUrls: ['./parlamentar-card.component.scss']
})
export class ParlamentarCardComponent implements OnInit {

  @Input() parlamentar: Parlamentar;

  constructor() { }

  ngOnInit() {
  }

  formatString(word: String) {
    return word.toLowerCase()
      .split(/ /g).map(word =>
        `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`)
      .join(" ");
  }

  getCargo(house: String) {
    if (house === 'câmara')
      return "Câmara"
    else 
      return "Senado"
  }

}
