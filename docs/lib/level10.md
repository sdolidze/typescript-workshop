# Level 10: Partial

```typescript
interface RequiredOptions {
  mode: string;
  volume: number;
  isElevated: boolean;
}

interface OptionalOptions {
  mode?: string;
  volume?: number;
  isElevated?: boolean;
}
```

```typescript
interface RequiredOptions {
  mode: string;
  volume: number;
  isElevated: boolean;
}

type OptionalOptions = Partial<RequiredOptions>;
```

### TODO: add constructor pattern
