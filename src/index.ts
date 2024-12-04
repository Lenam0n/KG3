import { Betriebsabrechnungsbogen } from "./Classes/Betriebsabrechnungsbogen/BAB";
import { Kalkulation } from "./Classes/Kalkulation/Kalkulation";
import { gemeinkosten } from "./data/gemeinkosten";
import { kostenstellen } from "./data/kostenstellen";
import { umsatzerloese } from "./data/umsatzerlöse";

const bab = new Betriebsabrechnungsbogen(gemeinkosten, kostenstellen);
//------------------------------------------
const kalkulation = new Kalkulation(
  3,
  2,
  3,
  2,
  0.96,
  bab.getGesamtkosten(), //Handlungskosten?
  umsatzerloese()
);

kalkulation.vorwaertsKalkulation(109); // Param => Listeneinkaufpreis
