import { v4 } from "uuid";

export function generatedCode() {
  const today = new Date().getTime();
  const generate = v4();

  return generate + "-" + today;
}
