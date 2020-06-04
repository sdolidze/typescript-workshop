# Unknown

## Assigning `string` to `unknown`

```typescript
const a: unknown = "John";
```

## Assigning `number` to `unknown`

```typescript
const a: number = 5;
const b: unknown = a;
```

## Assigning `unknown` to `string`

```typescript
const a: unknown = 5;
const b: string = a;
```

## Assigning `unknown` to `number`

```typescript
const a: unknown = 5;
const b: number = a as number;
```

## Assigning `string` to `number`

```typescript
// NOTE: This code is dangerous
const a: unknown = "John";
const b: number = a as number;
```
