# TODO: split into files and create good example

```typescript
type T01<T, U> = Exclude<T, U>;
```

```typescript
type T02<T, U> = Extract<T, U>;
```

```typescript
type T03<T> = NonNullable<T>;
```

```typescript
type T04<T extends (...args: any) => any> = ReturnType<T>;
```

```typescript
type T05<T extends new (...args: any) => any> = InstanceType<T>;
```

```typescript
type T06<T, U> = Extract<T, U>;
```

```typescript
type T07<T> = NonNullable<T>;
```

```typescript
type T08<T extends (...args: any) => any> = ReturnType<T>;
```

```typescript
type T09<T extends new (...args: any) => any> = InstanceType<T>;
```

```typescript
type T10<T, U extends keyof T> = Pick<T, U>;
```

```typescript
type T11<T, U extends "string"> = Omit<T, U>;
```

```typescript
type T12<K extends "string", V> = Record<K, V>;
```

```typescript
type T13<K extends (...args: any) => any> = Parameters<K>;
```

```typescript
type T14<K extends (...args: any) => any> = Partial<K>;
```

```typescript
type T15<K extends (...args: any) => any> = Required<K>;
```

```typescript
type T16<K extends (...args: any) => any> = Readonly<K>;
```

```typescript
type T17<T> = ReadonlyArray<T>;
```
