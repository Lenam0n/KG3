import { Umsatzerlöse } from "../Classes/Kalkulation/Kalkulation_types";

export const umsatzerloese = (): Umsatzerlöse => {
  const summe = Object.values(UL).reduce((acc, kosten) => acc + kosten, 0);
  return summe;
};

// Definition der Einzelkosten
export const UL = {
  Hardware: 306210.0,
  Software: 256870.0,
  Zubehör: 682000.0,
};
