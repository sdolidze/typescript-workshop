# Level 13: Does this code compile?

```typescript
function fn(a: string | null): number {
  if (a === null) {
    return -1;
  }

  return a.length;
}
```
