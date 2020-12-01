import {EventEmitter} from "@angular/core";

export class Duree {
  private valeur = 0;
  private joursAffiches = 0;
  private heuresAffichees = 0;
  private minutesAffichees = 0;
  private formate = '';

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

  private actualiserValeur(): void {
    this.valeur = this.joursAffiches * 8 + this.heuresAffichees + this.minutesAffichees / 60;
  }

  formater($event?: MouseEvent): string {
    this.valeur = this.jours * 8 + this.heures + this.minutes / 60;
    this.joursAffiches = Math.floor(this.valeur / 8);
    this.heuresAffichees = Math.floor(this.valeur % 8);
    this.minutesAffichees = Math.round(this.valeur % 1 * 60);
    return this.calculerFormate();
  }

  private calculerFormate(): string {
    const formattes = [];

    const joursAffiches = this.joursAffiches;
    if (joursAffiches) {
      formattes.push(joursAffiches + 'j');
    }

    const heuresAffichees = this.heuresAffichees;
    if (heuresAffichees) {
      formattes.push(heuresAffichees + 'h');
    }

    const minutesAffichees = this.minutesAffichees;
    if (minutesAffichees) {
      formattes.push(minutesAffichees + 'm');
    }

    return formattes.join(' ');
  }

  parRapportA(attendu: Duree): number {
    if (!attendu.valeur) {
      return undefined;
    }
    return Math.round(this.valeur / attendu.valeur * 100);
  }
}
