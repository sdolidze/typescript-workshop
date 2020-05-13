// # Level 05: Omit

// ## Manual

namespace Level05A {
  interface UserWithToken {
    id: string;
    name: string;
    token: string;
    avatarUrl: string;
  }

  interface User {
    id: string;
    name: string;
    avatarUrl: string;
  }
}

// ## Generated

namespace Level05B {
  interface UserWithToken {
    id: string;
    name: string;
    token: string;
    avatarUrl: string;
  }

  type User = Omit<UserWithToken, "token">;
}
