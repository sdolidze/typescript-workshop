// # Level 10: Readonly

// ## Manual

namespace Level10A {
  interface MutableOptions {
    mode: string;
    volume: number;
    isElevated: boolean;
  }

  interface ReadonlyOptions {
    readonly mode: string;
    readonly volume: number;
    readonly isElevated: boolean;
  }
}

// ## Generated

namespace Level10B {
  interface MutableOptions {
    mode: string;
    volume: number;
    isElevated: boolean;
  }

  const mutableOptions: MutableOptions = {
    mode: "default",
    volume: 25,
    isElevated: true,
  };

  mutableOptions.volume = 50;

  const readonlyOptions: Readonly<MutableOptions> = {
    mode: "default",
    volume: 25,
    isElevated: true,
  };

  // HINT: try to uncomment this line and see what happens
  // readonlyOptions.mode = "elevated";
}
