// Typen für Rabatte und Skonto
export interface RabattDetails {
  kundenRabatt: KundenRabatt;
  lieferRabatt: LieferRabatt;
  kundenSkonto: KundenSkonto;
  lieferSkonto: LieferSkonto;
}

export type Operator = "-" | "+";

export type GewinnSatz = number;

export type Umsatzerlöse = number;

export type Handlungskosten = number;

export type HandlungskostenZuschlagsSatz = number;

export type Wareneinsatz = number;

export type Umsätze = Array<{
  preis: number;
  menge: number;
}>;

// Typ für Listeneinkaufspreis
export type Listeneinkaufspreis = number;
// Typ für LieferRabatt
export type LieferRabatt = number;
// Typ für LieferSkonto
export type LieferSkonto = number;
// Typ für Zieleinkaufspreis
export type Zieleinkaufspreis = number;
// Typ für Bareinkaufspreis
export type Bareinkaufspreis = number;
// Typ für Bezugskosten
export type Bezugskosten = number;
// Typ für Bezugspreis
export type Bezugspreis = number;
// Typ für Handlungskostensatz
export type Handlungskostensatz = number;
// Typ für Selbstkosten
export type Selbstkosten = number;
// Typ für Gewinn
export type Gewinn = number;
// Typ für Barverkaufspreis
export type Barverkaufspreis = number;
// Typ für KundenSkonto
export type KundenSkonto = number;
// Typ für Zielverkaufspreis
export type Zielverkaufspreis = number;
// Typ für KundenRabatt
export type KundenRabatt = number;
// Typ für Listenverkaufspreis
export type Listenverkaufspreis = number;
