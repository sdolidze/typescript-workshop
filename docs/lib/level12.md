# Level 12: Readonly

```typescript
interface MutableOptions {
  mode: string;
  volume: number;
  isElevated: boolean;
}

interface ReadonlyOptions {
  readonly mode: string;
  readonly volume: number;
  readonly isElevated: boolean;
}
```

```typescript
interface MutableOptions {
  mode: string;
  volume: number;
  isElevated: boolean;
}

type ReadonlyOptions = Readonly<MutableOptions>;
```
