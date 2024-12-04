import {
  Bezugskosten,
  Listeneinkaufspreis,
  LieferRabatt,
  LieferSkonto,
  Zieleinkaufspreis,
  Bareinkaufspreis,
  Bezugspreis,
  Handlungskostensatz,
  Selbstkosten,
  Gewinn,
  Barverkaufspreis,
  KundenSkonto,
  Zielverkaufspreis,
  KundenRabatt,
  Listenverkaufspreis,
  Operator,
  GewinnSatz,
  Umsatzerlöse,
  Handlungskosten,
  HandlungskostenZuschlagsSatz,
  Wareneinsatz,
  Umsätze,
} from "./Kalkulation_types";

import {
  ausgabeListeneinkaufspreis,
  ausgabeLieferRabatt,
  ausgabeLieferRabatt_value,
  ausgabeLieferSkonto,
  ausgabeLieferSkonto_value,
  ausgabeZieleinkaufspreis,
  ausgabeBareinkaufspreis,
  ausgabeBezugskosten,
  ausgabeBezugspreis,
  ausgabeHandlungskostensatz,
  ausgabeSelbstkosten,
  ausgabeGewinn,
  ausgabeBarverkaufspreis,
  ausgabeKundenSkonto,
  ausgabeKundenSkonto_value,
  ausgabeZielverkaufspreis,
  ausgabeKundenRabatt,
  ausgabeKundenRabatt_value,
  ausgabeListenverkaufspreis,
  ausgabeHandlungskosten,
  ausgabeGewinnSatz,
} from "../../Utils/AusgabeUtils";

export class Kalkulation {
  private listeneinkaufspreis: Listeneinkaufspreis;
  private lieferRabatt: LieferRabatt;
  private lieferRabatt_value: LieferRabatt;
  private lieferSkonto: LieferSkonto;
  private lieferSkonto_value: LieferSkonto;
  private zieleinkaufspreis: Zieleinkaufspreis;
  private bareinkaufspreis: Bareinkaufspreis;
  private bezugskosten: Bezugskosten;
  private bezugspreis: Bezugspreis;
  private handlungskostensatz: Handlungskostensatz;
  private selbstkosten: Selbstkosten;
  private gewinn: Gewinn;
  private barverkaufspreis: Barverkaufspreis;
  private kundenSkonto: KundenSkonto;
  private kundenSkonto_value: KundenSkonto;
  private zielverkaufspreis: Zielverkaufspreis;
  private kundenRabatt: KundenRabatt;
  private kundenRabatt_value: KundenRabatt;
  private listenverkaufspreis: Listenverkaufspreis;

  private handlungskosten: Handlungskosten;
  private umsatz: Umsatzerlöse;
  private gewinn_value: Gewinn;
  private handlungskostensatz_value: HandlungskostenZuschlagsSatz;

  constructor(
    lieferrabatt: LieferRabatt,
    lieferskonto: LieferSkonto,
    kundenrabatt: KundenRabatt,
    kundenskonto: KundenSkonto,
    bezugskosten: Bezugskosten,
    handlungskosten: Handlungskosten,
    umsatz: Umsatzerlöse
  ) {
    this.lieferRabatt = lieferrabatt;
    this.lieferSkonto = lieferskonto;
    this.kundenRabatt = kundenrabatt;
    this.kundenSkonto = kundenskonto;
    this.bezugskosten = bezugskosten;
    this.handlungskosten = handlungskosten;
    this.umsatz = umsatz; // Gesamte Umsatzerlöse

    this.listeneinkaufspreis = 0;
    this.zieleinkaufspreis = 0;
    this.bareinkaufspreis = 0;

    this.bezugspreis = 0;
    this.handlungskostensatz = 0;
    this.selbstkosten = 0;
    this.gewinn = 0;
    this.barverkaufspreis = 0;
    this.zielverkaufspreis = 0;
    this.listenverkaufspreis = 0;

    this.lieferRabatt_value = 0;
    this.lieferSkonto_value = 0;
    this.kundenSkonto_value = 0;
    this.kundenRabatt_value = 0;
    this.gewinn_value = 0;
    this.handlungskostensatz_value = 0;
  }

  //Helper Functions

  //bei KundenSkonto und KundenRabatt
  private calculatePercent(wert: number, prozent: number): number {
    return (wert * prozent) / (100 - prozent);
  }

  //für die Werte die einen Wert von einem prozentsatz ermitteln
  private calculateFromPercentValue(wert: number, prozent: number): number {
    return (wert * prozent) / 100;
  }

  private calculateValue(a: number, b: number, operator: Operator): number {
    switch (operator) {
      case "-":
        return a - b;
      case "+":
        return a + b;

      default:
        throw new Error("Falscher Operator ausgewählt");
    }
  }

  private calculateGewinnSatz(): GewinnSatz {
    return (this.gewinn / this.umsatz) * 100;
  }

  private calculateGewinn(): Gewinn {
    return this.umsatz - this.selbstkosten;
  }

  private calculateWareneinsatz(): Wareneinsatz {
    return (
      this.listeneinkaufspreis -
      this.lieferRabatt_value -
      this.lieferSkonto_value +
      this.bezugskosten
    );
  }

  private calculateHandlungskosten(): Handlungskosten {
    return 0;
  }

  private calculateHandlungsKostenZuschlagsSatz(): HandlungskostenZuschlagsSatz {
    console.log(this.handlungskosten, "________-__");
    console.log(this.calculateWareneinsatz(), "________-__");
    return (this.handlungskosten / this.calculateWareneinsatz()) * 100;
  }

  /*
  //bei mehreren Produkten
  private calculateUmsatzerlöseGesamt(umsätze: Umsätze): Umsatzerlöse {
    let sum = 0;
    umsätze.forEach((e) => {
      sum += this.calculateUmsatzerlöse(e.menge, e.preis);
    });
    return sum;
  }

  //bei nur einem Produkt
  //Preis => Verkaufspreis pro Einheit
  //Menge => Anzahl an verkauften Einheiten
  private calculateUmsatzerlöse(menge: number, preis: number): Umsatzerlöse {
    this.umsatz = menge * preis;
    return this.umsatz;
  }
  */

  // Vorwärtskalkulation

  public vorwaertsKalkulation(LEP: Listeneinkaufspreis): Listenverkaufspreis {
    // Listeneinkaufspreis ausgeben
    this.listeneinkaufspreis = LEP;
    ausgabeListeneinkaufspreis(LEP);

    // Lieferantenrabatt berechnen und ausgeben
    ausgabeLieferRabatt(this.lieferRabatt);
    this.lieferRabatt_value = this.calculateFromPercentValue(
      LEP,
      this.lieferRabatt
    );
    ausgabeLieferRabatt_value(this.lieferRabatt_value);

    // Zieleinkaufspreis berechnen und ausgeben
    this.zieleinkaufspreis = this.calculateValue(
      LEP,
      this.lieferRabatt_value,
      "-"
    );
    ausgabeZieleinkaufspreis(this.zieleinkaufspreis);

    // Lieferantenskonto berechnen und ausgeben
    ausgabeLieferSkonto(this.lieferSkonto);
    this.lieferSkonto_value = this.calculateFromPercentValue(
      this.zieleinkaufspreis,
      this.lieferSkonto
    );
    ausgabeLieferSkonto_value(this.lieferSkonto_value);

    // Bareinkaufspreis berechnen und ausgeben
    this.bareinkaufspreis = this.calculateValue(
      this.zieleinkaufspreis,
      this.lieferSkonto_value,
      "-"
    );
    ausgabeBareinkaufspreis(this.bareinkaufspreis);

    // Bezugskosten berechnen und ausgeben
    ausgabeBezugskosten(this.bezugskosten);

    // Bezugspreis berechnen und ausgeben
    this.bezugspreis = this.calculateValue(
      this.bareinkaufspreis,
      this.bezugskosten,
      "+"
    );
    ausgabeBezugspreis(this.bezugspreis);

    //Handlunskosten
    this.handlungskosten = this.calculateHandlungskosten();
    ausgabeHandlungskosten(this.handlungskosten);

    // Handlungskostensatz berechnen und ausgeben
    this.handlungskostensatz = 35.1; //this.calculateHandlungsKostenZuschlagsSatz();
    ausgabeHandlungskostensatz(this.handlungskostensatz);

    // Selbstkosten berechnen und ausgeben
    this.selbstkosten = this.calculateValue(
      this.bezugspreis,
      this.calculateFromPercentValue(
        this.bezugspreis,
        this.handlungskostensatz
      ),
      "+"
    );
    ausgabeSelbstkosten(this.selbstkosten);

    // Gewinn berechnen und ausgeben
    this.gewinn = this.calculateGewinn();
    ausgabeGewinn(this.gewinn);
    this.gewinn_value = this.calculateGewinnSatz();
    ausgabeGewinnSatz(this.gewinn_value);

    // Barverkaufspreis berechnen und ausgeben
    this.barverkaufspreis = this.calculateValue(
      this.calculateFromPercentValue(this.selbstkosten, this.gewinn_value),
      this.selbstkosten,
      "+"
    );
    ausgabeBarverkaufspreis(this.barverkaufspreis);

    // Kundenskonto berechnen und ausgeben
    ausgabeKundenSkonto(this.kundenSkonto);
    this.kundenSkonto_value = this.calculatePercent(
      this.barverkaufspreis,
      this.kundenSkonto
    );
    ausgabeKundenSkonto_value(this.kundenSkonto_value);

    // Zielverkaufspreis berechnen und ausgeben
    this.zielverkaufspreis = this.calculateValue(
      this.barverkaufspreis,
      this.kundenSkonto_value,
      "+"
    );
    ausgabeZielverkaufspreis(this.zielverkaufspreis);

    // Kundenrabatt berechnen und ausgeben
    ausgabeKundenRabatt(this.kundenRabatt);
    this.kundenRabatt_value = this.calculatePercent(
      this.zielverkaufspreis,
      this.kundenRabatt
    );
    ausgabeKundenRabatt_value(this.kundenRabatt_value);

    // Listenverkaufspreis berechnen und ausgeben
    this.listenverkaufspreis = this.calculateValue(
      this.zielverkaufspreis,
      this.kundenRabatt_value,
      "+"
    );
    ausgabeListenverkaufspreis(this.listenverkaufspreis);

    // Rückgabe des Listenverkaufspreises
    return this.listenverkaufspreis;
  }

  /*
  // Rückwärtskalkulation
  rueckwaertsKalkulation(listenverkaufspreis: number): number {
    // Rückwärts von Listenverkaufspreis zu Zielverkaufspreis
     this.kundenRabatt_value = this.calculateFromPercentValue(
      listenverkaufspreis,
      this.kundenRabatt
    );

    this.kundenSkonto_value = this.calculateFromPercentValue(
      listenverkaufspreis,
      this.kundenRabatt
    );

    this.zielverkaufspreis = this.calculateValue(
      listenverkaufspreis,
      this.kundenSkonto_value,
      "-"
    );

    // Rückwärts von Zielverkaufspreis zu Barverkaufspreis
    const kundenskonto_value = this.calculateFromPercentValue(
      this.zielverkaufspreis,
      this.kundenSkonto
    );
    this.barverkaufspreis = this.calculateValue(
      this.zielverkaufspreis,
      kundenskonto_value,
      "-"
    );

    // Rückwärts von Barverkaufspreis zu Selbstkosten
    this.gewinn = this.calculateGewinn(); // Gewinnsatz wird hier verwendet
    this.selbstkosten = this.calculateValue(
      this.barverkaufspreis,
      this.gewinn,
      "-"
    );

    // Rückwärts von Selbstkosten zu Bezugspreis
    this.handlungskostensatz = this.calculateHandlungsKostenSatz(); // Handlungskostensatz als Prozentwert
    this.bezugspreis = this.calculateValue(
      this.selbstkosten,
      this.handlungskostensatz,
      "-"
    );

    // Rückwärts von Bezugspreis zu Bareinkaufspreis
    this.bezugskosten = this.calculateBezugskosten();
    this.bareinkaufspreis = this.calculateValue(
      this.bezugspreis,
      this.bezugskosten,
      "-"
    );

    // Rückwärts von Bareinkaufspreis zu Zieleinkaufspreis
    const lieferSkonto_value = this.calculateFromPercentValue(
      this.bareinkaufspreis,
      this.lieferSkonto
    );
    this.zieleinkaufspreis = this.calculateValue(
      this.bareinkaufspreis,
      lieferSkonto_value,
      "-"
    );

    // Rückwärts von Zieleinkaufspreis zu Listeneinkaufspreis
    const lieferRabatt_value = this.calculateFromPercentValue(
      this.zieleinkaufspreis,
      this.lieferRabatt
    );
    const listeneinkaufspreis = this.calculateValue(
      this.zieleinkaufspreis,
      lieferRabatt_value,
      "-"
    );

    return listeneinkaufspreis;
  }

  // Differenzkalkulation
  differenzKalkulation(): Gewinn {
    return 0;
  }*/
}
