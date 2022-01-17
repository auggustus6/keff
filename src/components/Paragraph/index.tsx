import { NextPage } from "next";
import * as Styles from "./styles";

export type ParagraphProps = {
  size: "small" | "medium" | "large" | "xlarge" | "xxlarge" | "huge";
  color?: string;
  fontWeight?: "normal" | "bold";
  onClick?: () => void;
};

const Paragraph: NextPage<ParagraphProps> = (props) => {
  return <Styles.Paragraph {...props}>{props.children}</Styles.Paragraph>;
};

export default Paragraph;
