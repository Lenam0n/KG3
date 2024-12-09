import {
  KostenProArtikel,
  KundenRabatt,
  KundenSkonto,
  LieferRabatt,
  LieferSkonto,
  Listeneinkaufspreis,
  MengeProArtikel,
  Versand,
} from "../Classes/Kalkulation/Kalkulation_types";

export const menge: MengeProArtikel = 25;
export const kosten: KostenProArtikel = 24;
export const listeneinkaufpreis: Listeneinkaufspreis = 109;
export const kundenSkonto = (days: number): KundenSkonto => {
  let skonto: KundenRabatt = 0;

  if (!days) throw new Error("Menge nicht gesetzt!");
  else if (days <= 10) skonto = 2; //Skonto Kondition1

  return skonto;
};
/* export const kundenRabatt = (
  menge: MengeProArtikel,
  rabattBonus: KundenRabatt = 0
): KundenRabatt => {
  let rabatt: KundenRabatt = 0;

  if (!menge) throw new Error("Menge nicht gesetzt!");
  else if (menge >= 50) rabatt = 5; //Rabatt Kondition1
  else if (menge >= 20) rabatt = 2; //Rabatt Kondition2

  return rabatt + rabattBonus;
}; */
export const kundenRabatt = 3;
export const lieferSkonto = 2;
export const lieferRabatt: LieferRabatt = 3;
export const versand = (menge: MengeProArtikel): Versand => {
  let versand: KundenRabatt = 0;

  if (!menge) throw new Error("Menge nicht gesetzt!");
  else if (menge <= 50) versand = 24; //Versand Kondition1
  else versand = 38; //Versand Kondition2

  return versand;
};
