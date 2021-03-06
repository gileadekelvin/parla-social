import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Parlamentar } from '../../models/Parlamentar.model';
import { ParlamentarService } from '../../services/parlamentar.service';

@Component({
  selector: 'app-parlamentar-container',
  templateUrl: './parlamentar-container.component.html',
  styleUrls: ['./parlamentar-container.component.scss']
})
export class ParlamentarContainerComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject();

  page: number;

  parlamentares: Parlamentar[];
  temResposta: boolean;

  isCollapsed = true;
  
  nome: string;
  partido: string;
  casa: String;
  
  constructor(private parlamentarService: ParlamentarService) {    
    this.page = 1;
    this.partido = "Partido";
    this.casa = "Casa";
  }

  ngOnInit() {
    this.parlamentarService.getParlamentares().pipe(takeUntil(this.unsubscribe)).subscribe(
      res => {
        this.parlamentares = res;        
        this.temResposta = true;        
      },
      error => console.log(error)
    );

  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
