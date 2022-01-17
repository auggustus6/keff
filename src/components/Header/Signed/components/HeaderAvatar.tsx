import { AiOutlineUser } from "react-icons/ai";
import { useTheme } from "styled-components";
import * as Styles from "./styles";

const HeaderAvatar = () => {
  const theme = useTheme();
  return (
    <Styles.Avatar>
      <AiOutlineUser size={24} color={theme.colors.gray} />
    </Styles.Avatar>
  );
};

export default HeaderAvatar;
