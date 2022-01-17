import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import * as Styles from "./styles";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  backgroundColor?: string;
  fullWidth?: boolean;
  color?: string;
} & ButtonTypes;

const Button = (
  {
    children,
    type,
    fullWidth = false,
    backgroundColor,
    disabled,
    color = "white",
    ...props
  }: ButtonProps,
  ref: any,
) => (
  <Styles.Wrapper
    type={type}
    fullWidth={fullWidth}
    disabled={disabled}
    backgroundColor={backgroundColor}
    ref={ref}
    color={color}
    {...props}
  >
    {children}
  </Styles.Wrapper>
);

export default forwardRef(Button);
