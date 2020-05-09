# Level 11: Required

## Manually create interface

```typescript
interface OptionalOptions {
  mode?: string;
  volume?: number;
  isElevated?: boolean;
}

interface RequiredOptions {
  mode: string;
  volume: number;
  isElevated: boolean;
}
```

### Generate new interface based on existing one

```typescript
interface OptionalOptions {
  mode?: string;
  volume?: number;
  isElevated?: boolean;
}

type RequiredOptions = Required<OptionalOptions>;
```
