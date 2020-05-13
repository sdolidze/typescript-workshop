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

// ## Make pattern

namespace Level08C {
  interface Options {
    mode: string;
    volume: number;
    isElevated: boolean;
  }

  function makeOptions(options: Partial<Options>): Options {
    return {
      mode: "default",
      isElevated: false,
      volume: 25,
      ...options,
    };
  }

  const defaultOptions = makeOptions({});
  const highVolumeOptions = makeOptions({ volume: 50 });
  const customOptions = makeOptions({
    mode: "special",
    isElevated: true,
    volume: 50,
  });
}
