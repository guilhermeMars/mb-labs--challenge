type Installments = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Payment {
  cardNumber: number;
  name: string;
  expirationMonth: number;
  expirationYear: number;
  cvv: number;
  numberOfInstallments: Installments;
}
