# Any

## Assigning `string` to `any`

```typescript
const a: any = "John";
```

## Assigning `number` to `any`

```typescript
const a: number = 5;
const b: any = a;
```

## Assigning `number` to `string`

```typescript
// NOTE: This code is dangerous
const a: any = 5;
const b: string = a;
```
