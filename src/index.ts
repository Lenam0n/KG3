import { Betriebsabrechnungsbogen } from "./Betriebsabrechnungsbogen/BAB";
import {
  Gemeinkosten,
  Kostenstelle,
  KostenstellenVerteilung,
} from "./Betriebsabrechnungsbogen/BAB_types";

// Definition der Gemeinkosten
const gemeinkosten: Gemeinkosten[] = [
  {
    name: "Personalaufwendungen",
    betrag: 49000,
    verteilungsart: "Gehaltsliste",
  },
  {
    name: "Soziale Aufwendungen",
    betrag: 12000,
    verteilungsart: "Gehaltsliste",
  },
  { name: "Abschreibungen", betrag: 19000, verteilungsart: "Anlagenspiegel" },
  { name: "Mietaufwand", betrag: 15000, verteilungsart: "m²" },
  { name: "Reisekosten", betrag: 4000, verteilungsart: "Belege" },
  { name: "Büromaterial", betrag: 2520, verteilungsart: "Anzahl Mitarbeiter" },
  { name: "Beiträge", betrag: 4100, verteilungsart: "Verhältniszahlen" },
  {
    name: "Betriebliche Steuern",
    betrag: 16000,
    verteilungsart: "Verhältniszahlen",
  },
  { name: "Zinsaufwand", betrag: 28125, verteilungsart: "Kapital" },
];

// Definition der Kostenstellen
const kostenstellen: Kostenstelle[] = [
  {
    name: "Geschäftsleitung",
    verteilungswerte: {
      Gehaltsliste: 20700,
      Anlagenspiegel: 1,
      "m²": 1,
      Belege: 2,
      "Anzahl Mitarbeiter": 2,
      Verhältniszahlen: 4,
      Kapital: 5,
    },
  },
  {
    name: "Verwaltung",
    verteilungswerte: {
      Gehaltsliste: 14500,
      Anlagenspiegel: 1,
      "m²": 2,
      Belege: 0,
      "Anzahl Mitarbeiter": 5,
      Verhältniszahlen: 9,
      Kapital: 12,
    },
  },
  {
    name: "Hardware",
    verteilungswerte: {
      Gehaltsliste: 11000,
      Anlagenspiegel: 3,
      "m²": 6,
      Belege: 1,
      "Anzahl Mitarbeiter": 6,
      Verhältniszahlen: 4,
      Kapital: 7,
    },
  },
  {
    name: "Software",
    verteilungswerte: {
      Gehaltsliste: 8400,
      Anlagenspiegel: 3,
      "m²": 2,
      Belege: 1,
      "Anzahl Mitarbeiter": 4,
      Verhältniszahlen: 6,
      Kapital: 4,
    },
  },
  {
    name: "Zubehör",
    verteilungswerte: {
      Gehaltsliste: 6400,
      Anlagenspiegel: 1,
      "m²": 4,
      Belege: 0,
      "Anzahl Mitarbeiter": 3,
      Verhältniszahlen: 1,
      Kapital: 2,
    },
  },
];

// Instanz des Betriebsabrechnungsbogens erstellen
const bab = new Betriebsabrechnungsbogen(gemeinkosten, kostenstellen);

// Verteilung der Gemeinkosten auf Kostenstellen berechnen
const kostenstellenVerteilung: KostenstellenVerteilung[] =
  bab.getKostenstellenVerteilung();
console.log("Verteilung der Gemeinkosten:", kostenstellenVerteilung);

// Gesamtkosten aller Gemeinkosten berechnen
const gesamtkosten = bab.getGesamtkosten();
console.log("Gesamtkosten aller Gemeinkosten:", gesamtkosten, "€");

// Beispiel für Integration in eine Kalkulation
import { Kalkulation } from "./Kalkulation/Kalkulation";
const umsatzerloese = 682000;
const kalkulation = new Kalkulation(
  3,
  2,
  3,
  2,
  0.96,
  gesamtkosten,
  umsatzerloese
); // Beispielwerte
const lep = 109; // Beispiel: Listeneinkaufspreis in €

kalkulation.vorwaertsKalkulation(lep);
