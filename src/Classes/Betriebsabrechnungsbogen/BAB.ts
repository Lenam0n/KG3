import {
  ausgabeGesamtkosten,
  ausgabeVerteilung,
} from "../../Utils/AusgabeUtils";
import {
  Gemeinkosten,
  Kostenstelle,
  KostenstellenVerteilung,
  Gesamtkosten,
} from "./BAB_types";

export class Betriebsabrechnungsbogen {
  private gemeinkosten: Gemeinkosten[];
  private kostenstellen: Kostenstelle[];

  constructor(gemeinkosten: Gemeinkosten[], kostenstellen: Kostenstelle[]) {
    this.gemeinkosten = gemeinkosten;
    this.kostenstellen = kostenstellen;
    ausgabeVerteilung(this.verteilungBerechnen());
    ausgabeGesamtkosten(this.gesamtkostenBerechnen());
  }

  // Verteilung der Gemeinkosten auf die Kostenstellen
  private verteilungBerechnen(): KostenstellenVerteilung[] {
    const verteilung: KostenstellenVerteilung[] = [];

    this.gemeinkosten.forEach((kosten) => {
      const { verteilungsart, betrag } = kosten;

      // Summe aller gültigen Schlüsselwerte für die aktuelle Verteilungsart
      const gesamtSchluesselwerte = this.kostenstellen.reduce(
        (summe, kostenstelle) =>
          summe + (kostenstelle.verteilungswerte[verteilungsart] || 0),
        0
      );

      // Fehlerbehandlung: Keine Schlüsselwerte vorhanden
      if (gesamtSchluesselwerte === 0) {
        console.warn(
          `Warnung: Keine Schlüsselwerte für die Verteilungsart '${verteilungsart}'.`
        );
        return;
      }

      // Verteilung der Gemeinkosten auf die Kostenstellen
      this.kostenstellen.forEach((kostenstelle) => {
        const schluesselwert =
          kostenstelle.verteilungswerte[verteilungsart] || 0;

        const verteilteKosten =
          gesamtSchluesselwerte > 0
            ? (betrag * schluesselwert) / gesamtSchluesselwerte
            : 0;

        // Hinzufügen oder Aktualisieren der Gesamtkosten pro Kostenstelle
        const existing = verteilung.find(
          (v) => v.kostenstelle === kostenstelle.name
        );
        if (existing) {
          existing.gesamtkosten += verteilteKosten;
        } else {
          verteilung.push({
            kostenstelle: kostenstelle.name,
            gesamtkosten: verteilteKosten,
          });
        }
      });
    });

    // Rundung auf 2 Dezimalstellen und finale Skalierung der Ergebnisse
    return verteilung.map((item) => ({
      kostenstelle: item.kostenstelle,
      gesamtkosten: Math.round(item.gesamtkosten * 100) / 100,
    }));
  }

  // Gesamtkosten aller Gemeinkosten berechnen
  private gesamtkostenBerechnen(): number {
    return this.gemeinkosten.reduce(
      (summe, kosten) => summe + kosten.betrag,
      0
    );
  }

  // Öffentliche Methode: Gesamtkosten zurückgeben
  public getGesamtkosten(): Gesamtkosten {
    return this.gesamtkostenBerechnen();
  }

  // Öffentliche Methode: Verteilung der Gemeinkosten zurückgeben
  public getKostenstellenVerteilung(): KostenstellenVerteilung[] {
    return this.verteilungBerechnen();
  }
}
