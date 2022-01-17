import { NextPage } from "next";
import * as Styles from "./styles";

export type TitleProps = {
  size: "small" | "medium" | "xxlarge" | "huge";
  color?: string;
  className?: string;
};

const Title: NextPage<TitleProps> = (props) => {
  return <Styles.Title {...props}>{props.children}</Styles.Title>;
};

export default Title;
