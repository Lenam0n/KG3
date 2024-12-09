import { Betriebsabrechnungsbogen } from "./Classes/Betriebsabrechnungsbogen/BAB";
import { Kalkulation } from "./Classes/Kalkulation/Kalkulation";
//------------------------------------------
import { gemeinkosten } from "./data/gemeinkosten";
import { kostenstellen } from "./data/kostenstellen";
import { umsatzerloese } from "./data/umsatzerlöse";
import { Einzelkosten } from "./data/Einzelkosten";
import {
  menge,
  kosten,
  kundenRabatt,
  kundenSkonto,
  lieferRabatt,
  lieferSkonto,
  listeneinkaufpreis,
  versand,
} from "./data/Product";

const bab = new Betriebsabrechnungsbogen(gemeinkosten, kostenstellen);
//------------------------------------------

const kalkulation = new Kalkulation(
  lieferRabatt,
  lieferSkonto,
  kundenRabatt, //(menge),
  kundenSkonto(1),
  bab
    .getKostenstellenVerteilung()
    .find((ks) => ks.kostenstelle === "Hardware")!.gesamtkosten, //Gesamtkosten(gemeinkosten) von Kostenstelle
  umsatzerloese(),
  menge,
  kosten
);

kalkulation.vorwaertsKalkulation(listeneinkaufpreis); // Param => Listeneinkaufpreis
