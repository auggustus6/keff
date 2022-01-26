import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/dist/client/router";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../Logo";
import MediaMatch from "../../MediaMatch";
import MenuMobile from "../../MenuMobile";
import Link from "next/link";
import Anchor from "components/Anchor";
import { Container } from "components/Container";
import * as Styles from "../styles";

const SignedHeader = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  const _mounted = useRef(true);

  useEffect(() => {
    _mounted.current = true;
    return () => {
      _mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (expanded) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  }, [expanded]);

  const handleRoute = () => router.push("/", "/", { shallow: true });

  const handleToggle = () => {
    if (_mounted.current) setExpanded(!expanded);
  };

  const handleNavigateMenu = (route: string) => {
    if (route === "signIn") {
      handleToggle();
      return;
    }
    handleToggle();
    router.push(route);
  };

  return (
    <Container>
      <Styles.Head>
        <Styles.Content>
          <Logo
            onClick={handleRoute}
            url="/img/logo.png"
            alternativeText="logotipo"
          />

          <MediaMatch lessThan="medium">
            <Styles.IconMenu aria-label="menu mobile" onClick={handleToggle}>
              {!expanded && <AiOutlineMenu size={30} color="#333" />}
              {expanded && <AiOutlineClose size={25} color="#333" />}
            </Styles.IconMenu>
          </MediaMatch>

          <MediaMatch greaterThan="medium">
            <Styles.Menu>
              {/* <Link href="/">
                <Styles.ItensMenu active={router.pathname == "/como-funciona"}>
                  <Anchor>Sobre nós</Anchor>
                </Styles.ItensMenu>
              </Link> */}

              <Styles.ContainerLogin>
                <Link href="#quero_comecar">
                  <div>
                    <Anchor>Quero Começar</Anchor>
                  </div>
                </Link>
              </Styles.ContainerLogin>
            </Styles.Menu>
          </MediaMatch>
        </Styles.Content>

        {expanded && <MenuMobile handleNavigate={handleNavigateMenu} />}
      </Styles.Head>
    </Container>
  );
};

export default SignedHeader;
