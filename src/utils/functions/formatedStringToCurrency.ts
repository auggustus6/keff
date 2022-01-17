export function formatedStringToCurrency(value?: string | number) {
  let data = value;

  if (typeof data == "number") {
    data = data.toString();
  }

  return `R$ ${data?.replace(".", ",")}`;
}
