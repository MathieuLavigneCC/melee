import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imputations',
  templateUrl: './imputations.component.html',
  styleUrls: ['./imputations.component.scss']
})
export class ImputationsComponent implements OnInit {

  cacheRealise: number;
  cacheAttendu: number;
  pourcentage = 0;

  constructor() { }

  ngOnInit(): void {
  }

  set realise(valeur: number) {
    this.cacheRealise = valeur;
    this.calculer();
  }

  get realise(): number {
    return this.cacheRealise;
  }

  set attendu(valeur: number) {
    this.cacheAttendu = valeur;
    this.calculer();
  }

  get attendu(): number {
    return this.cacheAttendu;
  }

  calculer($event?: MouseEvent): void {
    this.pourcentage = Math.round(this.realise / this.attendu * 100);
  }
}
