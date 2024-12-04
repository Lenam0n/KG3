// Typ für einzelne Gemeinkosten
export interface Gemeinkosten {
  name: Gemeinkosten_Name; // Name der Gemeinkostenart
  betrag: Gemeinkosten_Betrag; // Betrag in €
  verteilungsart: Verteilungsart; // Methode der Verteilung (dynamisch)
}

// Typ für eine Kostenstelle
export interface Kostenstelle {
  name: Kostenstelle_Name; // Name der Kostenstelle
  verteilungswerte: Verteilungswerte; // Dynamische Schlüsselwerte für Verteilungsarten
}

// Typ für die Verteilung der Gemeinkosten auf eine Kostenstelle
export interface KostenstellenVerteilung {
  kostenstelle: Kostenstelle_Name; // Name der Kostenstelle
  gesamtkosten: Gesamtkosten; // Verteilte Gesamtkosten
}

// Spezifische Typen
export type Gemeinkosten_Name = string;
export type Gemeinkosten_Betrag = number;
export type Verteilungsart = string;
export type Kostenstelle_Name = string;

// Schlüssel-Werte-Paar für Verteilungsarten
export type Verteilungswerte = Record<Verteilungsart, number | undefined>;
export type Gesamtkosten = number;
