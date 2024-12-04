import { Gesamtkosten } from "../Betriebsabrechnungsbogen/BAB_types";
import {
  DeckungsbeitragInput,
  Umsatzerlöse,
  VariableKosten,
  FixeKosten,
  Deckungsbeitrag,
} from "./DB_types";

export class DeckungsbeitragRechner {
  private umsatzerloese: Umsatzerlöse;
  private variableKosten: VariableKosten;

  private fixkosten: FixeKosten;
  private gesamtkosten: Gesamtkosten;

  private deckungsbeitrag: Deckungsbeitrag;
  private deckungsbeitragsquote: Deckungsbeitrag;

  constructor(input: DeckungsbeitragInput) {
    this.umsatzerloese = input.umsatzerloese;
    this.variableKosten = input.variableKosten;
    this.fixkosten = 0;
    this.gesamtkosten = 0;
    this.deckungsbeitrag = 0;
    this.deckungsbeitragsquote = 0;
  }

  // Berechnung des Deckungsbeitrags
  public calculateDeckungsbeitrag(): number {
    this.deckungsbeitrag = this.umsatzerloese - this.variableKosten;
    return this.deckungsbeitrag;
  }

  // Berechnung der Deckungsbeitragsquote
  public calculateDeckungsbeitragsquote(): number {
    this.deckungsbeitragsquote =
      (this.deckungsbeitrag / this.umsatzerloese) * 100;
    return this.deckungsbeitragsquote;
  }

  private calculateGesamtkosten(
    variableKostenStück: number,
    menge: number
  ): number {
    this.gesamtkosten = this.fixkosten + variableKostenStück * menge;
    return this.gesamtkosten;
  }

  private calculateFixkosten(
    variableKostenStück: number,
    menge: number
  ): number {
    this.fixkosten = this.gesamtkosten - variableKostenStück * menge;
    return this.fixkosten;
  }

  private calculateBreakEvenPoint(): number {
    return 0;
  }
}
