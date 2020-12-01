import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Duree} from "./duree.model";

@Component({
  selector: 'app-duree',
  templateUrl: './duree.component.html',
  styleUrls: ['./duree.component.scss']
})
export class DureeComponent implements OnInit {

  @Input()
  private duree = new Duree();
  @Output()
  private dureeChange = new EventEmitter<Duree>();
  formate = '';

  ngOnInit(): void {
  }

  set jours(valeur: number) {
    if (this.duree.jours !== valeur) {
      this.duree.jours = valeur;
      this.dureeChange.emit(this.duree);
    }
  }

  get jours(): number {
    return this.duree.jours;
  }

  set heures(valeur: number) {
    if (this.duree.heures !== valeur) {
      this.duree.heures = valeur;
      this.dureeChange.emit(this.duree);
    }
  }

  get heures(): number {
    return this.duree.heures;
  }

  set minutes(valeur: number) {
    if (this.duree.minutes !== valeur) {
      this.duree.minutes = valeur;
      this.dureeChange.emit(this.duree);
    }
  }

  get minutes(): number {
    return this.duree.minutes;
  }

  formater($event?: MouseEvent): void {
    const formate = this.duree.formater($event);
    if (this.formate !== formate) {
      this.formate = formate;
      this.dureeChange.emit(this.duree);
      console.log('duree change ', this.duree);
    }
  }
}
