# Discriminated union

## Part 1

```typescript
interface FixedFee {
  type: "FixedFee";
  fixed: number;
}

interface VariableFee {
  type: "VariableFee";
  multiplier: number;
}

type PaymentFee = FixedFee | VariableFee;

function totalCost(itemPrice: number, fee: PaymentFee): number {
  switch (fee.type) {
    case "FixedFee":
      return itemPrice + fee.fixed;
    case "VariableFee":
      return itemPrice * (1 + fee.multiplier);
  }
}

const costA = totalCost(100, { type: "FixedFee", fixed: 10 });
const costB = totalCost(100, { type: "VariableFee", multiplier: 0.05 });

console.log(costA); // prints 110
console.log(costB); // prints 105
```

## Part 2

```typescript
// HINT: try to add new fee type
interface FixedAndVariableFee {
  type: "FixedAndVariableFee";
  multiplier: number;
  fixed: number;
}
```
