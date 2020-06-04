# Type narrowing

## assigning `unknown` to `number`

```typescript
function fn(a: unknown) {
  const b: number = a;
}
```

## Valid and invalid branches

```typescript
function fn(a: unknown) {
  if (typeof a === "number") {
    // NOTE: this branch compiles
    const b: number = a;
  } else {
    // NOTE: this branch does not compile
    const c: number = a;
  }
}
```

## Multiple valid branches

```typescript
function fn(a: unknown) {
  if (typeof a === "boolean") {
    const b: boolean = a;
  } else if (typeof a === "number") {
    const c: number = a;
  }
}
```

## Union

```typescript
function fn(a: string | number) {
  if (typeof a === "string") {
    const b: string = a;
  } else {
    const c: number = a;
  }
}
```

## Early termination

```typescript
function fn(a: string | null): number {
  // HINT: try to comment this line and see what happens
  if (a === null) {
    return 0;
  }

  return a.length;
}
```
