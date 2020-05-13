function sum(xs: number[]): number {
  let acc = 0;

  for (const x of xs) {
    acc += x;
  }

  return acc;
}
class Redis {
  get(key: string): string {
    console.log(`REDIS_GET ${key}`);
    return ``;
  }

  put(key: string, value: string) {
    console.log(`REDIS_PUT ${key} => ${value}`);
  }

  delete(key: string) {
    console.log(`REDIS_DELETE ${key}`);
  }
}
