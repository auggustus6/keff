import { NextPage } from "next";
import * as Styles from "./styles";

export type TitleProps = {
  size: "small" | "medium" | "xlarge" | "xxlarge" | "huge";
  color?: string;
  className?: string;
  bold?: boolean;
  align?: "left" | "center" | "right";
};

const Title: NextPage<TitleProps> = (props) => {
  return <Styles.Title {...props}>{props.children}</Styles.Title>;
};

export default Title;
