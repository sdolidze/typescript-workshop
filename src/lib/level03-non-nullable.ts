// # Level 03: NonNullable

// ## string or null

namespace Level03A {
  type StringOrNull = string | null;

  type StringOnly = NonNullable<StringOrNull>;
}

// ## number or null

namespace Level03B {
  type NumberOrUndefined = number | undefined;

  type NumberOnly = NonNullable<NumberOrUndefined>;
}

// ## boolean or null or undefined

namespace Level03C {
  type BooleanOrNullOrUndefined = boolean | null | undefined;

  type BooleanOnly = NonNullable<BooleanOrNullOrUndefined>;
}
