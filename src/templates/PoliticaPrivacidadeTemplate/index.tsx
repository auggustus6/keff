import React from "react";
import * as Styles from "./styles";
import Title from "components/Title";
import Paragraph from "components/Paragraph";
import { useTheme } from "styled-components";
import Layout from "components/Layout";

const PoliticaPrivacidadeTemplate = () => {
  const theme = useTheme();
  return (
    <Layout>
      <Styles.Wrapper>
        <Title size="huge" color={theme.colors.white}>
          Política de Privacidade
        </Title>

        <Paragraph size="medium" color={theme.colors.white}>
          Bem-vinda(o) à política de privacidade dos produtos da KEFF INDUSTRIA
          FARMACEUTICA EIRELI., (Nós). Essa política foi elaborada com o intuito
          de ajudar você a entender melhor como coletamos, utilizamos e
          armazenamos seus dados pessoais. Aqui também informaremos como você
          pode acessar, atualizar e tomar, de forma consciente, decisões sobre o
          tratamento desses dados.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          A nossa política se aplica as pessoas que interajam com a KEFF
          INDUSTRIA FARMACEUTICA EIRELI., sejam como consumidores ou apenas
          visitante do nosso site
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Nós podemos, mas não nos obrigamos, a atualizar nossa política de
          privacidade periodicamente, a fim de refletir, por exemplo, eventual
          modificação na forma como tratamos os dados pessoais; por questões
          legais, operacionais ou decorrentes
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Ao navegar no nosso portal e/ou utilizar nossas funcionalidades, você
          concorda com todas as condições de uso. Por favor, leia tudo, com
          calma e paciência. Caso você não compreenda alguma informação, entre
          em contato com a nossa equipe, por meio do endereço eletrônico:
          contato@keffbr.com.br.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Caso você opte por não fornecer dados pessoais que Nós consideremos
          necessários a nossa operação (não se preocupe, nós indicaremos quais
          as informações indispensáveis), é provável que você não tenha acesso à
          integralidade de nossas funcionalidades.
        </Paragraph>

        <Title size="xxlarge" color={theme.colors.white}>
          Dados Coletados e forma de coleta.
        </Title>

        <Paragraph size="medium" color={theme.colors.white}>
          Como nossa interação pode se dar por uma multiplicidade de canais
          (site, telefone, e-mail, chat), Nós podemos coletar as seguintes
          informações:
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Informações pessoais de contato: São as informações que você nos
          disponibiliza para que possamos estabelecer contato com você, tais
          como: nome, endereço, e-mail, telefone ou perfis de rede sociais.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Informações de login/conta: São as informações necessárias a criação
          do teu cadastro no nosso portal, tanto para fins de envio de
          comentários e avaliação quanto para a operacionalização do pedido.
          Para criar o cadastro, Nós solicitaremos a disponibilização de um
          e-mail válido, que será o teu nome de usuário, e a criação de uma
          senha.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Informações sobre os dispositivos de acesso: São as informações
          disponibilizadas a partir do teu acesso aos nossos sites ou
          aplicativo. Caso você esteja acessando por um computador, Nós teremos
          acesso ao IP da máquina. Caso você esteja acessando por um dispositivo
          móvel, como um smatphone ou tablet, poderemos ter acesso ao ID de
          identificação do dispositivo, além das informações geográficas do
          local de acesso.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Informações de utilização de sites/pesquisa de mercado consumidor: Ao
          utilizar nossos sites, Nós procederemos com a coleta automática de
          informações específicas sobre a navegação, incluindo, mas não se
          limitando a/ao: extrato das tuas interações na página, o compilado dos
          links que você acessou, quantidade de visualizações às páginas, tempo
          das visualizações, erro de download, erro sistêmico. Para a captura
          dessas informações específicas utilizamos tecnologias automatizadas
          como Cookies, Google Analytics, dentre outros.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Em relação à pesquisa de mercado/Compartilhamento de conteúdo: São as
          informações que você, voluntariamente, compartilha ao relatar sua
          experiência com a utilização de nossos produtos. Quanto a esse
          compartilhamento: Nós coletamos os conteúdos gerados por você, como
          fotos, vídeos, depoimentos, textos, utilizando-os tanto para fins de
          definição de estratégia interna do grupo quanto para fins comerciais.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Informações de redes sociais de terceiros: São informações que você
          compartilha publicamente em uma rede social de terceiros, bem como as
          que você permite que as redes sociais compartilhem com terceiros. Nós
          recebemos suas informações básicas (tais como nome, foto de perfil, id
          de usuário, dentre outras), ou parte delas, sempre que você utiliza um
          recurso que é integrado com o nosso portal. Caso você opte pela
          cessação desse compartilhamento, é necessário que você faça o
          requerimento diretamente a rede social.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Informações de pagamento: São as informações relativas às formas de
          pagamento, assim como dados de cartão de crédito/débito.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Informações fornecidas do meio do SAC: São as informações
          disponibilizadas ao Serviço de atendimento ao cliente, seja por meio
          telefônico, chat, e-mail ou contato pelas redes sociais. Essas
          informações podem ser gravadas. Nessa hipótese, por força de Lei, você
          será informado da gravação, quando do início do contato.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Dados pessoais sensíveis: Não coletamos, conscientemente, dados
          sensíveis (que são os que revelam origem racial ou étnica, convicções
          religiosas ou filosóficas, opiniões políticas, filiação sindical,
          questões genéticas, biométricas e sobre a saúde ou a vida sexual) para
          o desenvolvimento de nossas atividades. Caso seja necessária a
          captação desses dados para algum motivo específico, você será
          cientificado e terá oportunidade de se recusar a fornecêlos. Em
          qualquer hipótese, Nós apenas os utilizaremos após o expresso
          consentimento e unicamente para fins autorizados pela Lei Geral de
          Proteção de Dados e outras legislações aplicáveis à espécie.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Dados de crianças e adolescentes: São informação que dizem respeito à
          menores de dezoito anos. Não coletamos, conscientemente, dados de
          menores de dezoito anos. Não permitimos, intencionalmente, que
          crianças e adolescentes utilizem nossos serviços.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Caso tenhamos acesso, não intencional, a esses dados, esses serão
          excluídos com a maior brevidade possível. Podemos, no entanto, coletar
          e tratar dados pessoais de menores de dezoito anos, caso esses sejam
          disponibilizados por seus pais, tutores ou responsáveis legais, e com
          o consentimento expresso desses.
        </Paragraph>

        <Title size="xxlarge" color={theme.colors.white}>
          Cookies e demais tecnologias de captação de dados.
        </Title>

        <Paragraph size="medium" color={theme.colors.white}>
          Os cookies são pequenos arquivos de texto colocados em seu computador
          pelos sites que você visita. Esses são utilizados para fins de
          individualização da sua experiência como consumidor, bem como para
          fornecer informações aos proprietários dos sites.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Nós utilizamos os cookies para melhorar a funcionalidade dos nossos
          portais, entender nossos consumidores e nossos visitantes, além de
          adaptá-los às suas especificidades
        </Paragraph>

        <Title size="xxlarge" color={theme.colors.white}>
          Tipos de Cookies
        </Title>

        <Paragraph size="medium" color={theme.colors.white}>
          Nós utilizamos dois tipos de cookies, os de sessão e os persistentes:
          Cookies de sessão: Também conhecidos como cookies transitórios, são
          aqueles que são apagados quando você fecha o navegador. Ou seja, ao
          iniciar uma nova sessão o nosso portal tratará você como um visitante
          novo.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Cookies persistentes: São aqueles que permanecem armazenados no disco
          rígido do computador até que você os exclua manualmente ou até que
          esses expirem.
        </Paragraph>

        <Title size="xxlarge" color={theme.colors.white}>
          Tecnologias similares/Endereço de IP:
        </Title>

        <Paragraph size="medium" color={theme.colors.white}>
          Endereço de IP é a identidade da tua máquina. Habitualmente,
          registra-se endereço de IP para os mesmos fins que utiliza-se os
          cookies, ou seja, para fins de individualização da experiência do
          usuário/consumidor.
        </Paragraph>

        <Title size="xxlarge" color={theme.colors.white}>
          Gerenciamento de cookies e definições de preferências.
        </Title>

        <Paragraph size="medium" color={theme.colors.white}>
          É necessário que as configurações do seu computador reflitam se você
          permite ou não a utilização de cookies pelos sites. Para tanto, você
          pode configurar o seu navegador para avisálo antes de aceitar um
          Cookie, ou pode configurá-lo para recusar automaticamente. Caso você
          não autorize a utilização de Cookies, é possível que a utilização
          plena das funcionalidades seja prejudicada.
        </Paragraph>

        <Title size="xxlarge" color={theme.colors.white}>
          Divulgação de seus dados pessoais.
        </Title>

        <Paragraph size="medium" color={theme.colors.white}>
          É necessário que você tenha ciência que necessitamos compartilhar os
          seus dados (parcialmente ou integralmente) com algumas organizações de
          terceiros. Abaixo nós elencaremos quais são os segmentos das empresas
          e o motivo pelo qual nos compartilhamos os dados.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Provedores de serviços: São as companhias externas que Nós utilizamos
          para fins de operacionalização do nosso negócio (exemplos: atendimento
          a pedidos, processamento de pagamentos, operação de sites, serviço de
          suporte, desenvolvimento de sites, análise de dados, auditoria de SAC,
          dentre outros).
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Em qualquer hipótese, os provedores de serviços com os quais
          trabalhamos só têm acesso aos dados necessários ao desempenho das
          funções específicas e são obrigados, por lei e contratos, a manter
          sigilo sobre os dados compartilhados.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Atenção: É importante lembrar que esses provedores têm políticas
          próprias de privacidade, então, caso você queira entender melhor como
          os seus dados serão tratados por essas empresas, é necessário que você
          acesse a política de privacidade de cada companhia.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Sempre que você sair dos nossos portais ou for redirecionado para
          sites de terceiros, a relação não será mais regida por nossa política
          de privacidade ou pelos Termos de Condição de Uso dos nossos portais.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Terceiros que têm acesso aos dados por questões legais ou em razão de
          fusão ou aquisição: Caso haja uma necessidade legal de divulgação dos
          seus dados, seremos obrigados a compartilhá-los (exemplos: resposta a
          procedimentos legais, resposta a pedido de autoridade competente, para
          proteção de nossos direitos, privacidade, segurança ou propriedade,
          para fins de cumprimento dos termos de acordo ou termos de uso do site
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Caso haja uma fusão ou aquisição da KEFF INDUSTRIA FARMACEUTICA
          EIRELI., haverá o compartilhamento dos seus dados com o nosso sucessor
          legal.
        </Paragraph>

        <Title size="xxlarge" color={theme.colors.white}>
          Retenção dos dados pessoais.
        </Title>

        <Paragraph size="medium" color={theme.colors.white}>
          Cumprindo a legislação aplicável, Nós usaremos seus dados pessoais
          pelo tempo necessário para a satisfação da finalidade para a qual
          esses foram originalmente colhidos ou para cumprir com o estabelecido
          em Lei
        </Paragraph>

        <Title size="xxlarge" color={theme.colors.white}>
          Divulgação, Armazenamento e/ou Transferência dos dados pessoais:
        </Title>

        <Paragraph size="medium" color={theme.colors.white}>
          Pessoas autorizadas a acessar seus Dados Pessoais: Os seus Dados
          Pessoais podem ser acessados por nossos colaboradores e/ou agentes
          autorizados, que os acessarão apenas para fins de operacionalização da
          prestação do serviço específico.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Medidas de Segurança no armazenamento: Nossos sistemas operacionais de
          armazenamento de dados atendem, razoavelmente, a todos os protocolos
          de segurança e proteção de dados pessoais. Entretanto, é necessário
          informar que a transmissão de dados pela internet não é completamente
          segura, de modo que, apesar de fazermos o melhor para prezar pela
          segurança das informações pessoais, não podemos assegurar que não
          haverá falhas
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          O seu papel na guarda dos Dados Pessoais: Você, também, é responsável
          pela guarda e manutenção da segurança em relação aos seus dados
          pessoais. Para tanto, é necessário que você crie uma senha forte e
          mantenha-a em confidencialidade. Se você utilizar um computador
          compartilhado ou público, nunca escolha a opção de “salvar login e
          senha”, além de sempre se certificar de ter feito o log out (sair da
          conta). Tudo o que for feito por meio da sua conta será considerado de
          sua responsabilidade.
        </Paragraph>

        <Title size="xxlarge" color={theme.colors.white}>
          Seus Direitos e Suas Escolhas em Relação aos Dados Pessoais
        </Title>

        <Paragraph size="medium" color={theme.colors.white}>
          Por força de Lei, você tem direito de acessar, revisar e/ou requisitar
          cópia eletrônica das informações que temos sobre você. Você pode
          solicitar o exercício desses direitos por e-mail, bastando enviar
          junto à solicitação documentos que comprovem a sua identidade. Caso o
          pedido seja efetuado por terceiro, é necessário que esse comprove a
          legitimidade para o requerimento, como, por exemplo, enviando-nos uma
          procuração com assinatura reconhecida em cartório. Se não houver a
          comprovação de legitimidade, e prezando pela sua segurança, o pedido
          será rejeitado
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Você poderá: (i) solicitar a exclusão, modificação, portabilidade ou
          revisão dos seus dados pessoais; (ii) limitar a divulgação dos seus
          dados; (iii) revogar o consentimento para tratamento de dados.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Atenção: Caso você solicite a exclusão de seus dados pessoais,
          necessitaremos excluir a sua conta de usuário. Ainda na hipótese de
          exclusão, pode ser que Nós tenhamos que reter parte dos dados para
          fins de atendimento a nossas obrigações legais ou contratuais.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Você poderá alterar pessoalmente alguns dados, como, por exemplo,
          senha de usuário.
        </Paragraph>

        <Paragraph size="medium" color={theme.colors.white}>
          Escolhas: Você poderá, ainda, exercer o controle sobre os seus dados
          pessoais da seguinte maneira: Cookies e tecnologias similares: Você
          pode gerenciar a utilização de Cookies e das tecnologias similares por
          meio da configuração de seu navegador.
        </Paragraph>

        <Title size="xxlarge" color={theme.colors.white}>
          Contato
        </Title>

        <Paragraph size="medium" color={theme.colors.white}>
          Você pode entrar em contato conosco para saber mais sobre nossa
          Política e práticas de Privacidade, por meio do endereço eletrônico
          contato@keffbr.com.br. Nós investigaremos de forma ativa qualquer
          reclamação ou denúncia sobre a temática de proteção de dados, nos
          termos da legislação aplicável
        </Paragraph>
      </Styles.Wrapper>
    </Layout>
  );
};

export default PoliticaPrivacidadeTemplate;
