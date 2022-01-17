import * as Styles from "./styles";
import ReactLoading, { LoadingType } from "react-loading";
import { useTheme } from "styled-components";

type LoadinProps = {
  type?: LoadingType;
  color?: string;
  width?: string;
};

const Loading = ({ type = "balls", color, width = "5%" }: LoadinProps) => {
  const theme = useTheme();
  return (
    <Styles.Wrapper>
      <ReactLoading
        type={type}
        color={color ?? theme.colors.primary}
        height={"100%"}
        width={width}
      />
    </Styles.Wrapper>
  );
};

export default Loading;
