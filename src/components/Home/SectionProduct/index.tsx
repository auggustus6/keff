import Button from "components/Button";
import { Container } from "components/Container";
import Paragraph from "components/Paragraph";
import Title from "components/Title";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import * as Styles from "./styles";

const SectionProduct = () => {
  const { push } = useRouter();
  const theme = useTheme();
  const GridItem = ({
    title,
    description,
    imageSource,
  }: {
    title: string;
    description: string;
    imageSource?: string;
  }) => (
    <Styles.GridItem>
      <img src={imageSource} />
      <Paragraph size="large" color={theme.colors.primary}>
        {title}
      </Paragraph>
      <Paragraph size="medium" color={theme.colors.white}>
        {description}
      </Paragraph>
    </Styles.GridItem>
  );

  const handleClick = () => {
    push("#buy-now");
  };

  return (
    <Styles.Wrapper>
      <Container>
        <Title size="huge" color={theme.colors.primary}>
          O que vem dentro do meu RESSACAPS?
        </Title>
        <Paragraph size="large" color={theme.colors.white}>
          Bebidas que repõem sais minerais têm muito açúcar e não contêm todos
          os nutrientes que você precisaria para se recompor.
        </Paragraph>
        <Styles.Image src="/img/packs/01-pack.png" />
        <Styles.Grid>
          <GridItem
            title="Taurina"
            imageSource="/img/ingredients/taurina.png"
            description="A taurina é um ácido orgânico encontrado no fígado. Ela tem ação desintoxicante e pode até ajudar na regeneração do fígado, além de proporcionar mais energia ao metabolismo"
          />

          <GridItem
            title="Bitartarato de Colina"
            imageSource="/img/ingredients/birtarato_colina.png"
            description="Move as gorduras para fora do fígado e pode reduzir de forma evidente danos hepáticos causados pelo consumo pontual de bebida alcoólica"
          />

          <GridItem
            title="Coenzima Q10"
            imageSource="/img/ingredients/q10.png"
            description="A coenzima Q10 é uma substância presente em todas as células do nosso organismo, participando dos processos de produção de energia e atua como antioxidante poderoso"
          />

          <GridItem
            title="N-Acetil-Cisteina"
            imageSource="/img/ingredients/cisteina.png"
            description="Auxilia na redução de ácidos biliares, bilirrubina e gliceróis associados ao consumo de álcool, apresentando efeito protetivo ao fígado."
          />

          <GridItem
            title="Cobre Bisglicinato"
            imageSource="/img/ingredients/bisglicinato.png"
            description="O cobre é importantíssimo para a produção de glóbulos vermelhos, e ativador do sistema imunológico."
          />

          <GridItem
            title="Selenometionina"
            imageSource="/img/ingredients/selenometionina.png"
            description="Aminoácido essencial que pode auxiliar na proteção hepática, diminuindo processos oxidativos e inflamatórios induzidos pelo álcool."
          />

          <GridItem
            title="Acido Ascorbico"
            imageSource="/img/ingredients/ascorbico.png"
            description="Auxilia no funcionamento do sistema imune e tem forte ação antioxidante que auxilia na proteção dos danos causados pelos radicais livres."
          />

          <GridItem
            title="Acido Glutamico"
            imageSource="/img/ingredients/glutamico.png"
            description="O ácido glutâmico é um aminoácido importante para o bom funcionamento do cérebro, além de ser fundamental para originar outras substâncias essenciais para o bom funcionamento do organismo"
          />

          <GridItem
            title="Pantotenato de Calcio"
            imageSource="/img/ingredients/pantotenato_de_calcio.png"
            description="O ácido pantotênico auxilia no metabolismo energético."
          />

          <GridItem
            title="Acido Folico"
            imageSource="/img/ingredients/acido_folico.png"
            description="Suporte para manter o cérebro saudável e prevenir o acúmulo de gordura nos vasos sanguíneos."
          />

          <GridItem
            title="Biotina"
            imageSource="/img/ingredients/biotina.png"
            description="Vitamina do Complexo B que auxilia no equilibro de minerais no organismo"
          />

          <GridItem
            title="Cianocobalamina"
            imageSource="/img/ingredients/cianocobalamina.png"
            description="Atua diretamente na diminuição de processos oxidativos hepáticos e na reciclagem de subprodutos que podem apresentar efeitos negativos ao organismo."
          />

          <GridItem
            title="Vitamina E Acetato"
            imageSource="/img/ingredients/vitamina_e_acetato.png"
            description="Um potente antioxidante, fundamental para o correto metabolismo do fígado. Pode auxiliar na diminuição de processos inflamatórios."
          />

          <GridItem
            title="Zinco Bisglicinato"
            imageSource="/img/ingredients/zinco_bisglicinato.png"
            description="Tem ação antioxidante que auxilia na proteção dos danos causados pelos radicais livres e auxilia no bom funcionamento do sistema imune."
          />

          <GridItem
            title="Riboflavina"
            imageSource="/img/ingredients/riboflavina.png"
            description="Também conhecida como vitamina B2, a riboflavina faz parte do complexo B. Esses nutrientes são responsáveis pela produção e distribuição de energia."
          />

          <GridItem
            title="Manganes Bisglicinato"
            imageSource="/img/ingredients/manganes_bisglicinato.png"
            description="Funciona como antioxidante, ativa enzimas que participam do metabolismo dos carboidratos, aminoácidos e colesterol"
          />

          <GridItem
            title="Triptofano"
            imageSource="/img/ingredients/triptofano.png"
            description="O triptofano é um aminoácido essencial que participa em diversas funções metabólicas, servindo para combater a depressão, controlar a ansiedade; aumentar o humor, melhorar a memória, regular o sono, aliviando os sintomas de insônia;"
          />

          <GridItem
            title="Clorid. Piridoxina"
            imageSource="/img/ingredients/clorid_piridoxina.png"
            description="Indicada para auxiliar na recuperação de alterações hepáticas decorrentes da intoxicação alcoólica aguda e crônica e fígado gorduroso."
          />
        </Styles.Grid>

        <Styles.ButtonContainer>
          <Button
            size="large"
            backgroundColor={theme.colors.secondary}
            onClick={handleClick}
          >
            COMPRAR AGORA
          </Button>
        </Styles.ButtonContainer>
      </Container>
    </Styles.Wrapper>
  );
};

export default SectionProduct;
