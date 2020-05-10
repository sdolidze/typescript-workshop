// # Level 02: Record

// ## Dictionary/HashMap use case

namespace Level02A {
  interface Droid {
    name: string;
    planet: string;
  }

  const droids: Record<string, Droid> = {
    r2d2: {
      name: "R2-D2",
      planet: "Naboo",
    },
    c3po: {
      name: "C-3PO",
      planet: "Tatooine",
    },
    bb8: {
      name: "BB-8",
      planet: "Hosnian Prime",
    },
  };
}

// ## Enum use case

namespace Level02B {
  enum FoodType {
    Banana = "Banana",
    Tomato = "Tomato",
    Milk = "Milk",
    Cheese = "Cheese",
  }

  // HINT: Try to comment one item
  const inventory: Record<FoodType, number> = {
    [FoodType.Banana]: 1,
    [FoodType.Tomato]: 2,
    [FoodType.Milk]: 3,
    [FoodType.Cheese]: 4,
  };
}
