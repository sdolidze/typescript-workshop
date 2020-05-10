// # Level 06: Parameters

// ## Manual

namespace Level06A {
  function repeat(pattern: string, count: number): string {
    return "";
  }

  type RepeatParameters = Parameters<typeof repeat>;
}

// ## Generated

namespace Level06B {
  function repeat(pattern: string, count: number): string {
    return "";
  }

  type RepeatParameters = Parameters<typeof repeat>;
}

// ## Spread use case

namespace Level06C {
  const args: Parameters<typeof repeat> = ["sandro", 26];

  repeat(...args);

  function repeat(pattern: string, count: number): string {
    return "";
  }
}
