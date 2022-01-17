import { CSSProperties, useEffect, useState } from "react";
import preLoad from "../../assets/images/lazy.gif";

type LazyBackgroundProps = {
  src: string;
  styles: CSSProperties;
};

const LazyBackground = ({ src, styles }: LazyBackgroundProps) => {
  const [source, setSource] = useState(preLoad);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSource(src);
  }, [src]);

  return <div style={{ backgroundImage: `url(${source})`, ...styles }}></div>;
};

export default LazyBackground;
