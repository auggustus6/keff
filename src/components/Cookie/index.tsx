import { useState, useEffect } from "react";
import Button from "../Button";
import * as Styles from "./styles";

const Cookie = () => {
  const [cookieDisplay, setCookiesDisplay] = useState("");

  const getCookieValue = (name: string) => {
    return (
      document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() ||
      ""
    );
  };

  const allowCookies = () => {
    const date = new Date();
    const expireMs = 100 * 365 * 24 * 60 * 60 * 1000; // 100 days
    date.setTime(date.getTime() + expireMs);
    document.cookie = `cookies=allowed;expires=${date.toUTCString()};path=/`;
    setCookiesDisplay("none");
  };

  useEffect(() => {
    getCookieValue("cookies") == "allowed"
      ? setCookiesDisplay("none")
      : setCookiesDisplay("block");
  }, []);

  return (
    <Styles.Wrapper cookieDisplay={cookieDisplay} data-testid="Wrapper">
      <Styles.Container>
        <Styles.Block>
          <h4>Nós usamos cookies</h4>
          <span>
            Os cookies são usados para melhorar sua experiência aqui com a
            gente. Ao fechar este banner e/ou continuar navegando na página,
            você concorda com o uso de cookies.
            <a href="/">Saber mais</a>
          </span>
        </Styles.Block>

        <Button size="large" color="primary" onClick={allowCookies}>
          PERMITIR TODOS OS COOKIES
        </Button>
      </Styles.Container>
    </Styles.Wrapper>
  );
};

export default Cookie;
