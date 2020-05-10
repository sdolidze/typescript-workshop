// # Level 08: Partial

// ## Manual

namespace Level08A {
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
}

// ## Generated

namespace Level08B {
  interface RequiredOptions {
    mode: string;
    volume: number;
    isElevated: boolean;
  }

  type OptionalOptions = Partial<RequiredOptions>;
}

// ## TODO: add constructor pattern
