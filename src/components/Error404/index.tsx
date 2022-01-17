import * as Styles from "./styles";
import Button from "../Button";

const Error404 = () => {
  return (
    <Styles.Wrapper data-testid="Wrapper">
      <Styles.Container>
        <img
          src="/img/not-found.jpg"
          alt="Um monstro adorável, azul e com chifres segurando o número 404."
        />
        <Styles.Text>
          <h1>Ops...</h1>
          <p>
            A página que você está procurando parece não estar mais aqui, nunca
            esteve ou.. foi devorada!
          </p>
          <Button size="medium" backgroundColor="primary" color="white">
            <a href="/">voltar para a página principal</a>
          </Button>
        </Styles.Text>
      </Styles.Container>
    </Styles.Wrapper>
  );
};

export default Error404;
