import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-duree',
  templateUrl: './duree.component.html',
  styleUrls: ['./duree.component.scss']
})
export class DureeComponent implements OnInit {

  @Input()
  private valeur: number;
  @Output()
  private valeurChange = new EventEmitter<number>();
  joursAffiches = 0;
  heuresAffichees = 0;
  minutesAffichees = 0;

  constructor() {
    console.log('duree init');
    console.log(this.valeur);
    this.valeur = 0;
    this.valeurChange.emit(this.valeur);
  }

  ngOnInit(): void {
  }

  set jours(valeur: number) {
    this.joursAffiches = valeur;
    this.actualiserValeur();
  }

  get jours(): number {
    return this.joursAffiches;
  }

  set heures(valeur: number) {
    this.heuresAffichees = valeur;
    this.actualiserValeur();
  }

  get heures(): number {
    return this.heuresAffichees;
  }

  set minutes(valeur: number) {
    this.minutesAffichees = valeur;
    this.actualiserValeur();
  }

  get minutes(): number {
    return this.minutesAffichees;
  }

  formatter($event?: MouseEvent): void {
    this.valeur = this.jours * 8 + this.heures + this.minutes / 60;
    this.valeurChange.emit(this.valeur);
    console.log(this.valeur);
    this.joursAffiches = Math.floor(this.valeur / 8);
    this.heuresAffichees = Math.floor(this.valeur % 8);
    this.minutesAffichees = Math.floor(this.valeur % 1 * 60);
  }

  private actualiserValeur(): void {
    this.valeur = this.joursAffiches * 8 + this.heuresAffichees + this.minutesAffichees / 60;
    this.valeurChange.emit(this.valeur);
  }
}
