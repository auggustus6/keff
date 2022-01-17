import React from "react";
import * as Styles from "./styles";

type Props = {
  children: React.ReactNode | string;
};

const Anchor = ({ children }: Props, ref: any) => (
  <Styles.Wrapper ref={ref}>{children}</Styles.Wrapper>
);

export default React.forwardRef(Anchor);
