// # Level 09: Required

// ## Manual

namespace Level09A {
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
}

// ### Generated

namespace Level09B {
  interface OptionalOptions {
    mode?: string;
    volume?: number;
    isElevated?: boolean;
  }

  const optionalOptions = {
    // HINT: try to comment one property and see what happens
    mode: "default",
    volume: 50,
    isElevated: false,
  };

  const requiredOptions: Required<OptionalOptions> = {
    // HINT: try to comment one property and see what happens
    mode: "default",
    volume: 50,
    isElevated: false,
  };
}
