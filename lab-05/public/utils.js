export function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
export function makeCounter(start = 0) {
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
export function getRequired(selector, root = document) {
    const el = root.querySelector(selector);
    if (el === null) {
        throw new Error(`Element not found: ${selector}`);
    }
    return el;
}
