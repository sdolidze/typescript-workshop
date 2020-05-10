// # Level 04: Pick

// ## Manual

namespace Level04A {
  interface LargeObject {
    // If this property changes in any way, `SlimObject0` will be out of sync
    property01: string;
    property02: string;
    property03: string;
    property04: string;
    property05: string;
    property06: string;
    property07: string;
    property08: string;
    property09: string;
    property10: string;
  }

  interface SlimObject {
    property01: string;
    property02: string;
  }
}

// ## Generated

namespace Level04B {
  interface LargeObject {
    // Comment this property and see what happens to `SlimObject`
    property01: string;
    property02: string;
    property03: string;
    property04: string;
    property05: string;
    property06: string;
    property07: string;
    property08: string;
    property09: string;
    property10: string;
    // Comment this property and see what happens to `SlimObject`
  }

  type SlimObject = Pick<LargeObject, "property01" | "property02">;
}
