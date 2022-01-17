import * as Styles from "./styles";
import { FiUser, FiUserPlus } from "react-icons/fi";
import { useTheme } from "styled-components";
// import Logo from "../../Logo";

type MenuMobileProps = {
  handleNavigate: (route: string) => void;
};

const MenuMobile = ({ handleNavigate }: MenuMobileProps) => {
  const theme = useTheme();

  return (
    <Styles.Wrapper>
      <Styles.Header>
        <Styles.ContentAvatar>
          <Styles.Avatar onClick={() => handleNavigate("signIn")}>
            <FiUserPlus size={28} color={theme.colors.gray} />
          </Styles.Avatar>
          <Styles.DataUser>
            <span>Faça seu login</span>
            <span>Entre ou cadastre-se na plataforma</span>
          </Styles.DataUser>
        </Styles.ContentAvatar>
      </Styles.Header>

      <Styles.Content>
        <Styles.Card onClick={() => handleNavigate("/")}>
          <Styles.Container>
            <h4>Ebook`s</h4>
            <span>Listagem de ebooks por categoria</span>
          </Styles.Container>

          <FiUser size={58} color={theme.colors.primary} />
        </Styles.Card>

        <Styles.Card onClick={() => handleNavigate("/")}>
          <Styles.Container>
            <h4>Politica de privacidade</h4>
            <span>Listagem de ebooks por categoria</span>
          </Styles.Container>

          <FiUser size={58} color={theme.colors.primary} />
        </Styles.Card>

        <Styles.Card onClick={() => handleNavigate("/")}>
          <Styles.Container>
            <h4>Termos de uso</h4>
            <span>Listagem de ebooks por categoria</span>
          </Styles.Container>

          <FiUser size={58} color={theme.colors.primary} />
        </Styles.Card>
      </Styles.Content>
    </Styles.Wrapper>
  );
};

export default MenuMobile;
