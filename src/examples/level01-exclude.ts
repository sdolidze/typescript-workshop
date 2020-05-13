// # Level 01: Exclude

// ## Manual

namespace Level01A {
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
}

// ## Generated

namespace Level01B {
  type State =
    | "idle"
    | "pending"
    | "sending"
    | "receiving"
    | "processing"
    | "success"
    | "failure";

  type BusyState = Exclude<State, "idle">;
}

namespace Level01C {
  type StringOrNumberOrBoolean = string | number | boolean;

  type StringOrNumber = Exclude<StringOrNumberOrBoolean, boolean>;
}
