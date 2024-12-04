import {
  Gemeinkosten,
  Kostenstelle,
  KostenstellenVerteilung,
} from "../Betriebsabrechnungsbogen/BAB_types";

// Funktionen für die Ausgabe von Berechnungen

export const ausgabeListeneinkaufspreis = (value: number) => {
  console.log(`📌 Der Listeneinkaufspreis beträgt: ${value.toFixed(2)} €`);
};

export const ausgabeLieferRabatt = (percentage: number) => {
  console.log(`📉 Der Lieferantenrabatt beträgt: ${percentage.toFixed(2)} %`);
};

export const ausgabeLieferRabatt_value = (value: number) => {
  console.log(`💰 Der absolute Rabattwert beträgt: ${value.toFixed(2)} €`);
};

export const ausgabeLieferSkonto = (percentage: number) => {
  console.log(`📉 Der Lieferantenskonto beträgt: ${percentage.toFixed(2)} %`);
};

export const ausgabeLieferSkonto_value = (value: number) => {
  console.log(`💰 Der absolute Skontowert beträgt: ${value.toFixed(2)} €`);
};

export const ausgabeZieleinkaufspreis = (value: number) => {
  console.log(`🎯 Der Zieleinkaufspreis beträgt: ${value.toFixed(2)} €`);
};

export const ausgabeBareinkaufspreis = (value: number) => {
  console.log(`💸 Der Bareinkaufspreis beträgt: ${value.toFixed(2)} €`);
};

export const ausgabeBezugskosten = (value: number) => {
  console.log(`🚚 Die Bezugskosten betragen: ${value.toFixed(2)} €`);
};

export const ausgabeBezugspreis = (value: number) => {
  console.log(`🛒 Der Bezugspreis beträgt: ${value.toFixed(2)} €`);
};

export const ausgabeHandlungskostensatz = (percentage: number) => {
  console.log(`📊 Der Handlungskostensatz beträgt: ${percentage.toFixed(2)} %`);
};

export const ausgabeSelbstkosten = (value: number) => {
  console.log(`🔧 Die Selbstkosten betragen: ${value.toFixed(2)} €`);
};

export const ausgabeGewinn = (value: number) => {
  console.log(`💹 Der absolute Gewinnwert beträgt: ${value.toFixed(2)} €`);
};
export const ausgabeGewinnSatz = (percentage: number) => {
  console.log(`💹 Der Gewinnsatz beträgt:${percentage.toFixed(2)} %`);
};

export const ausgabeBarverkaufspreis = (value: number) => {
  console.log(`💰 Der Barverkaufspreis beträgt: ${value.toFixed(2)} €`);
};

export const ausgabeKundenSkonto = (percentage: number) => {
  console.log(`📉 Der Kundenskonto beträgt: ${percentage.toFixed(2)} %`);
};

export const ausgabeKundenSkonto_value = (value: number) => {
  console.log(
    `💰 Der absolute Kundenskontowert beträgt: ${value.toFixed(2)} €`
  );
};

export const ausgabeZielverkaufspreis = (value: number) => {
  console.log(`🎯 Der Zielverkaufspreis beträgt: ${value.toFixed(2)} €`);
};

export const ausgabeKundenRabatt = (percentage: number) => {
  console.log(`📉 Der Kundenrabatt beträgt: ${percentage.toFixed(2)} %`);
};

export const ausgabeKundenRabatt_value = (value: number) => {
  console.log(
    `💰 Der absolute Kundenrabattwert beträgt: ${value.toFixed(2)} €`
  );
};

export const ausgabeListenverkaufspreis = (value: number) => {
  console.log(`🛍️  Der Listenverkaufspreis beträgt: ${value.toFixed(2)} €`);
};

export const ausgabeHandlungskosten = (value: number) => {
  console.log(`📊 Die Handlungskosten betragen: ${value.toFixed(2)} €`);
};

export const ausgabeUmsatz = (value: number) => {
  console.log(`📈 Der Umsatz beträgt: ${value.toFixed(2)} €`);
};

////////////////////////////////////////////////
//********************************************//
////////////////////////////////////////////////

// Funktionen für die Ausgabe von Betriebsabrechnungsbogen

export const ausgabeGemeinkosten = (gemeinkosten: Gemeinkosten[]) => {
  console.log("\n🔍 Gemeinkosten:");
  gemeinkosten.forEach((kosten) => {
    console.log(
      `   - ${kosten.name}: ${kosten.betrag.toFixed(2)} € (${
        kosten.verteilungsart
      })`
    );
  });
};

export const ausgabeKostenstellen = (kostenstellen: Kostenstelle[]) => {
  console.log("\n🏢 Kostenstellen:");
  kostenstellen.forEach((kostenstelle) => {
    console.log(`   - ${kostenstelle.name}:`);
    Object.entries(kostenstelle.verteilungswerte).forEach(([art, wert]) => {
      console.log(`     -> ${art}: ${wert}`);
    });
  });
};

export const ausgabeGesamtkosten = (gesamtkosten: number) => {
  console.log(`\n💳 Die Gesamtkosten betragen: ${gesamtkosten.toFixed(2)} €`);
};

export const ausgabeVerteilung = (verteilung: KostenstellenVerteilung[]) => {
  console.log("\n📊 Verteilung der Gemeinkosten auf Kostenstellen:");
  verteilung.forEach((item) => {
    console.log(
      `   - Kostenstelle ${item.kostenstelle}: ${item.gesamtkosten.toFixed(
        2
      )} €`
    );
  });
};
