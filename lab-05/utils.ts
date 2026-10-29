export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface Counter {
  increment(): number;
  decrement(): number;
  reset(): void;
  value(): number;
}

export function makeCounter(start: number = 0): Counter {
  let count = start;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => {
      count = start;
    },
    value: () => count,
  };
}

export function getRequired<T extends Element>(
  selector: string,
  root: ParentNode = document
): T {
  const el = root.querySelector<T>(selector);
  if (el === null) {
    throw new Error(`Element not found: ${selector}`);
  }
  return el;
}
