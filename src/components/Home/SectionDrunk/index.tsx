import { useState } from "react";
import { Container } from "components/Container";
import Paragraph from "components/Paragraph";
import Title from "components/Title";
import { useTheme } from "styled-components";
import Button from "components/Button";
import * as Styles from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";

const SectionDrunk = () => {
  const { push } = useRouter();
  const theme = useTheme();
  const [viewText, setViewText] = useState(false);

  const handleClick = () => {
    push("#buy-now");
  };

  return (
    <Styles.Wrapper>
      <Container>
        <Styles.ContainerInfo>
          <Styles.LeftSide viewText={viewText}>
            <Title size="huge" color={theme.colors.primary}>
              Não é conversa fiada de bar, é ciência!
            </Title>
            <Paragraph size="large" color="white">
              Os excessos podem te causar mau estar, mas através da fórmula
              exclusiva de RessaCaps, seu metabolismo nunca mais vai te dar uma
              lição de moral no dia seguinte!
            </Paragraph>

            <Title size="xxlarge" color="white" className="textDrunk">
              “Eu bebo mesmo é pra ficar ruim! Se fosse pra ficar bom, eu
              tomava…” Ops…com RessaCaps você não fica “ruim”!
            </Title>

            <Styles.ContainerPill>
              <Paragraph color="white" size="large">
                Não consegue ler? É só você tomar 1 Ressacaps
              </Paragraph>
              <img
                onMouseEnter={() => setViewText(!viewText)}
                onMouseLeave={() => setViewText(!viewText)}
                src="svgs/pills.svg"
              />
            </Styles.ContainerPill>

            <Button
              size="large"
              backgroundColor={theme.colors.secondary}
              onClick={handleClick}
            >
              COMPRAR AGORA
            </Button>
          </Styles.LeftSide>

          <Styles.RightSide>
            <img src="img/pill.png" />
          </Styles.RightSide>
        </Styles.ContainerInfo>
      </Container>
    </Styles.Wrapper>
  );
};

export default SectionDrunk;
