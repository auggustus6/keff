import { HTMLAttributes } from "react";
import * as Styles from "./styles";

type InputProps = HTMLAttributes<HTMLInputElement>;

const SearchInput = ({ onClick }: InputProps) => {
  return (
    <Styles.Wrapper
      placeholder="Encontre seu médico, ebook preferido..."
      onClick={onClick}
    />
  );
};

export default SearchInput;
