import * as Styles from "./styles";
import { FiUser, FiUserPlus } from "react-icons/fi";
import { useTheme } from "styled-components";

type MenuMobileProps = {
  handleNavigate: (route: string) => void;
};

const MenuMobile = ({ handleNavigate }: MenuMobileProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Header>
        <Styles.ContentAvatar onClick={() => handleNavigate("")}>
          <img src="img/mobile/icone-4.png" />
          <Styles.DataUser>
            <h4>Quero Começar</h4>
            <span>Cadastre-se na plataforma</span>
          </Styles.DataUser>
        </Styles.ContentAvatar>
      </Styles.Header>

      <Styles.Content>
        <Styles.Card onClick={() => handleNavigate("")}>
          <Styles.Container>
            <h4>Sobre nós</h4>
            <span>Confira mais sobre a KEFF</span>
          </Styles.Container>
          <img src="img/mobile/icone-5.png" />
        </Styles.Card>

        <Styles.Card onClick={() => handleNavigate("/")}>
          <Styles.Container>
            <h4>Fale Conosco</h4>
            <span>Confira mais sobre a KEFF</span>
          </Styles.Container>

          <img src="img/mobile/icone-3.png" />
        </Styles.Card>
      </Styles.Content>
    </Styles.Wrapper>
  );
};

export default MenuMobile;
