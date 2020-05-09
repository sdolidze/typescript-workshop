# Level 19: Functional programming vs Object-oriented programming

## FP: Data and behaviour are separated

```typescript
interface Rectangle {
  type: 'Rectangle';
  color: string;
  height: number;
  width: number;
}

interface Circle {
  type: 'Circle';
  color: string;
  radius: number;
}

type Shape = Rectangle | Circle;

// ------------------------
// ----- CHINESE WALL -----
// ------------------------

function area(shape: Shape): number {
  switch (shape.type) {
    // Try commenting one case and see what happens
    case 'Circle':
      return shape.radius * Math.PI ** 2;
    case 'Rectangle':
      return shape.width * shape.height;
    // Notice there is no 'default' clause, type checking is exhaustive
  }
}
```

## OOP: Data and behaviour are together

```typescript
interface Shape {
  color: string;
  area(): number;
}

class Rectangle implements Shape {
  constructor(
    public color: string,
    public height: number,
    public width: number,
  ) {}

  area(): number {
    return this.height * this.width;
  }
}

class Circle implements Shape {
  constructor(public color: string, public radius: number) {}

  area(): number {
    return this.radius * Math.PI ** 2;
  }
}
```
