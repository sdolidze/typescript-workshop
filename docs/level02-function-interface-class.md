# Function, Interface, Class

## Function

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

## Interface

```typescript
interface User {
  id: string;
  name: string;
  age: number;
}
```

## Class

```typescript
class UserService {
  putUser(user: User): void {
    console.log("PUT_USER", user);
  }

  getUser(userId: string): User {
    return { id: "1", name: "John", age: 25 };
  }
}
```
