import MaskedInput from "react-text-mask";

type TextMaskProps = {
  inputRef: (ref: HTMLInputElement | null) => void;
};

export function dynamicPhoneMask(value: string) {
  const rawValue = value.replace(/\D/g, "");
  if (rawValue.length > 12) {
    return [
      "+",
      "5",
      "5",
      " ",
      "(",
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      " ",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ];
  } else {
    return [
      "+",
      "5",
      "5",
      " ",
      "(",
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ];
  }
}

export const TextMaskPhone = (props: TextMaskProps) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={(ref: MaskedInput | HTMLInputElement | null) => {
        inputRef(ref ? (ref as any).inputElement : null);
      }}
      mask={dynamicPhoneMask}
    />
  );
};
