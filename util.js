export function sum(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function pick(obj, props) {
  return Object.fromEntries(props.map((prop) => [prop, obj[prop]]));
}
