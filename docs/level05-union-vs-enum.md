# Union vs Enum

## Enum (number type)

```typescript
enum Direction {
  Up,
  Down,
}

const direction = Direction.Up;
```

## Enum (string type)

```typescript
enum Direction {
  Up = "Up",
  Down = "Up",
}

const direction = Direction.Up;
```

## Union

```typescript
type Direction = "up" | "down";

const direction = "up";
```
