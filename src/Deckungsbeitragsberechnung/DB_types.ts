// Typ für die Eingabedaten der Deckungsbeitragsrechnung
export interface DeckungsbeitragInput {
  umsatzerloese: Umsatzerlöse; // Gesamterlös in €
  variableKosten: VariableKosten; // Variable Kosten in €
}

export type Umsatzerlöse = number;
export type VariableKosten = number;
export type FixeKosten = number;
export type Deckungsbeitrag = number;
