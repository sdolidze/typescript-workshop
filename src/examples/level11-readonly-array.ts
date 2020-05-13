// # Level 11: ReadonlyArray

namespace Level11A {
  // `const` does not solve the problem of mutability
  const xs: number[] = [1, 2, 3];

  xs[2] = 5;
  xs.push(1);
  xs.shift();
  xs.splice(0, 1);
}

namespace Level11B {
  const xs: readonly number[] = [1, 2, 3];

  // HINT: try to uncomment this lines and see what happens
  //   xs[2] = 5;
  //   xs.push(1);
  //   xs.shift();
  //   xs.splice(0, 1);
}
