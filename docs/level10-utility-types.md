# Utility types

## Exclude

```typescript
type State =
  | "idle"
  | "pending"
  | "sending"
  | "receiving"
  | "processing"
  | "success"
  | "failure";

type BusyState =
  | "pending"
  | "sending"
  | "receiving"
  | "processing"
  | "success"
  | "failure";

type BusyState2 = Exclude<State, "idle">;
```

## Partial

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

type OptionalOptions2 = Partial<RequiredOptions>;
```

## Required

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

type RequiredOptions2 = Required<OptionalOptions>;
```

## Readonly

```typescript
interface Options {
  mode: string;
  volume: number;
  isElevated: boolean;
}

interface ReadonlyOptions {
  readonly mode: string;
  readonly volume: number;
  readonly isElevated: boolean;
}

type ReadonlyOptions2 = Readonly<Options>;
```

## Pick

```typescript
interface User {
  id: string;
  name: string;
  age: number;
  isActive: boolean;
  roles: string[];
  personalId: string;
  images: string[];
  status: string;
  type: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface SlimUser {
  id: string;
  name: string;
  age: number;
}

type SlimUser2 = Pick<User, "id" | "name" | "age">;
```

## Omit

```typescript
interface User {
  id: string;
  name: string;
  age: number;
  isActive: boolean;
  roles: string[];
}

interface SlimUser {
  id: string;
  name: string;
  age: number;
}

type SlimUser2 = Omit<User, "isActive" | "roles">;
```
