# Level 18: What's the difference?

```typescript
interface Rectangle {
  type: "Rectangle";
  color: string;
  height: number;
  width: number;
}

interface Circle {
  type: "Circle";
  color: string;
  radius: number;
}

type Shape = Rectangle | Circle;
```

```typescript
abstract class Shape {
  constructor(public color: string) {}
}

class Rectangle extends Shape {
  constructor(
    public color: string,
    public height: number,
    public width: number
  ) {
    super(color);
  }
}

class Circle extends Shape {
  constructor(public color: string, public radius: number) {
    super(color);
  }
}
```
