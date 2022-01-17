import React from "react";
import * as Styles from "./styles";

type LogoProps = {
  alternativeText?: string;
  url: string;
  onClick?: () => void;
};

const Logo = ({ alternativeText, url, onClick }: LogoProps) => (
  <Styles.LogoWrapper
    aria-label="mudebook"
    src={url}
    alt={alternativeText}
    onClick={onClick}
  />
);

export default Logo;
