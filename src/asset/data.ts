interface Transaction {
  id: number;
  date: string;
  amount: number;
  description: string;
}

const generateMockTransactions = (): Transaction[] => {
  const mockTransactions: Transaction[] = [];
  const transactionDescriptions: string[] = [
    "Payment for service",
    "Product purchase",
    "Subscription renewal",
    "Online transaction",
    "Transaction fee",
    "Refund",
    "Donation",
    "Investment",
    "Rent payment",
    "Utility bill",
    "Grocery shopping",
    "Restaurant bill",
    "Travel expense",
    "Insurance premium",
    "Loan repayment",
    "Salary deposit",
    "Bonus payout",
    "Gift purchase",
    "Education fee",
    "Medical expenses",
  ];

  for (let i = 1; i <= 53; i++) {
    const randomIndex = Math.floor(
      Math.random() * transactionDescriptions.length
    );
    const randomDescription = transactionDescriptions[randomIndex];
    const randomAmount = Math.floor(Math.random() * 1000) + 1;
    const randomDate = generateRandomDate(new Date(2020, 0, 1), new Date());

    mockTransactions.push({
      id: i,
      date: randomDate.toISOString().slice(0, 10),
      amount: randomAmount,
      description: randomDescription,
    });
  }

  return mockTransactions;
};

const generateRandomDate = (start: Date, end: Date): Date => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

export const mockData: Transaction[] = generateMockTransactions();
