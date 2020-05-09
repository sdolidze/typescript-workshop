# Level 18: What's the difference?

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
```

```typescript
class Shape {
  color: string;
}

class Rectangle extends Shape {
  height: number;
  width: number;
}

class Circle extends Shape {
  radius: number;
}
```
