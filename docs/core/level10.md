# Level 10: Does this code compile?

```typescript
function fn(a: unknown) {
  const b: number = a;
}
```

```typescript
function fn(a: unknown) {
  if (typeof a === 'number') {
    const b: number = a;
  }
}
```
