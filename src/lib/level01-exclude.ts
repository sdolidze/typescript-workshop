// # Level 01: Exclude

namespace Level01A {
  type Direction = "up" | "down" | "left" | "right";

  type Horizontal = Exclude<Direction, "up" | "down">;
}

namespace Level01B {
  type StringOrNumberOrBoolean = string | number | boolean;

  type StringOrNumber = Exclude<StringOrNumberOrBoolean, boolean>;
}
