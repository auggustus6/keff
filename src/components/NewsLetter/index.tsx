import * as Styles from "./styles";
const NewsLetter = () => {
  return (
    <Styles.Wrapper>
      <Styles.ContentForm>
        <input type="text" required placeholder="Digite seu melhor e-mail" />
        <button type="submit">Enviar</button>
      </Styles.ContentForm>
    </Styles.Wrapper>
  );
};

export default NewsLetter;
