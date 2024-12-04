import { Gemeinkosten } from "../Classes/Betriebsabrechnungsbogen/BAB_types";

// Definition der Gemeinkosten
export const gemeinkosten: Gemeinkosten[] = [
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
