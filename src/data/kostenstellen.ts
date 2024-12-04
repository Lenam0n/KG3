import { Kostenstelle } from "../Classes/Betriebsabrechnungsbogen/BAB_types";

// Definition der Kostenstellen
export const kostenstellen: Kostenstelle[] = [
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
