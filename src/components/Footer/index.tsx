import React, { useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import * as Styles from "./styles";
import Cookie from "../Cookie/index";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import NewsLetter from "components/NewsLetter";

const Footer = () => {
  const stylesCopyright = {
    marginRight: "0.5rem",
    marginLeft: "0.5rem",
    color: "red",
  };
  const { t } = useTranslation("common");
  const router = useRouter();

  const persistLocaleCookie = useCallback(() => {
    const date = new Date();
    const expireMs = 100 * 365 * 24 * 60 * 60 * 1000; // 100 days
    date.setTime(date.getTime() + expireMs);
    document.cookie = `NEXT_LOCALE=${
      router?.locale
    };expires=${date.toUTCString()};path=/`;
  }, [router?.locale]);

  useEffect(() => {
    persistLocaleCookie();
  }, [persistLocaleCookie]);
  return (
    <>
      <Cookie></Cookie>
      <Styles.Wrapper>
        <Styles.Container>
          <Styles.Block>
            <h4>{t("socialMedia.message")}</h4>
            <span>{t("socialMedia.follow")}</span>
            <Styles.Social>
              <a
                href="https://m.facebook.com/KEFF-107873608320145/"
                target="_blank"
                rel="noreferrer"
                aria-label="facebook"
              >
                <img src="/svgs/facebook.svg" />
              </a>
              <a
                href="https://instagram.com/keff.br?utm_medium=copy_link"
                target="_blank"
                rel="noreferrer"
                aria-label="instagram"
              >
                <img src="/svgs/instagram.svg" />
              </a>
            </Styles.Social>

            {/* <NewsLetter /> */}
          </Styles.Block>

          <Styles.Block>
            <h4>{t("contactUs.letTalk")}</h4>
            <span>{t("contactUs.sendMessage")}</span>
            <Styles.Social>
              <a href="mailto:sac@keffbr.com.br" aria-label="mail">
                <img src="/svgs/email.svg" />
                <span>sac@keffbr.com.br</span>
              </a>
            </Styles.Social>
            <Styles.Social>
              <a href="mailto:sac@keffbr.com.br" aria-label="mail">
                <img src="/svgs/phone.svg" />
                <span>Tel SAC: (17) 3266-8383</span>
              </a>
            </Styles.Social>

            <div className="terms">
              <Link href="/termos-de-uso">
                <span>Termos de uso</span>
              </Link>
              {/* <Link href="/politica-de-privacidade">
                <span>Politica de privacidade</span>
              </Link> */}
            </div>
          </Styles.Block>
        </Styles.Container>
      </Styles.Wrapper>
      <Styles.Copyright>
        <Styles.Container>
          <span>{t("allRights.message")}</span>
          <span className="span-copyright">
            {t("developed.smallText")} <span style={stylesCopyright}> ❤ </span>{" "}
            {t("developed.and")} ☕ {t("developed.by")}
            <strong style={{ marginLeft: "0.5rem", marginRight: ".4rem" }}>
              {" "}
              {t("developed.companyName")}{" "}
            </strong>
          </span>
        </Styles.Container>
      </Styles.Copyright>
    </>
  );
};

export default Footer;
