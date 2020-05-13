# Level 11: Does this code compile?

```typescript
function fn(a: unknown) {
  if (typeof a === 'boolean') {
    const b: boolean = a;
  } else if (typeof a === 'number') {
    const c: number = a;
  }
}
```
