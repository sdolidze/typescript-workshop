# Level 01: Exclude

```typescript
type Direction = "up" | "down" | "left" | "right";

type Horizontal = Exclude<Direction, "up" | "down">;
```
