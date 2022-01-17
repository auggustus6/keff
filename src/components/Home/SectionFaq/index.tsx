import { Container } from "components/Container";
import Title from "components/Title";
import theme from "styles/theme";
import { useState } from "react";
import * as Styles from "./styles";
import CustomCollapse from "./components/CustomCollapse";
const SectionFaq = () => {
  return (
    <Styles.Wrapper>
      <Container>
        <Title color={theme.colors.primary} size="xxlarge">
          Perguntas Frequentes
        </Title>

        <Styles.Grid>
          <CustomCollapse
            question="De que forma devo tomar Ressacaps?"
            answer="Sugerimos a ingestão de 1 dose (2 cápsulas) com 300ml de água "
          />

          <CustomCollapse
            question="Posso tomar Ressacaps em dias consecutivos?"
            answer="Sim! Cada dose de Ressacaps contém as quantidades DIÁRIAS indicadas"
          />

          <CustomCollapse
            question="Diabéticos podem tomar Ressacaps?"
            answer="Sim. A fórmula do Ressacaps não contém açúcar."
          />

          <CustomCollapse
            question="A fórmula do Ressacaps é vegana?"
            answer="Não. As cápsulas do Ressacaps são compostas por gelatina, não sendo indicada para regimes vegannos."
          />
        </Styles.Grid>
      </Container>
    </Styles.Wrapper>
  );
};

export default SectionFaq;
