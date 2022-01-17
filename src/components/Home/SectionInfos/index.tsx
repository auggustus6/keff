import { FaPlus, FaFigma, FaCreditCard, FaExpeditedssl } from "react-icons/fa";
import Paragraph from "components/Paragraph";
import { Container } from "components/Container";
import * as Styles from "./styles";

const SectionInfos = () => {
  return (
    <Container>
      <Styles.Wrapper>
        <Styles.Block>
          <FaFigma size={48} color="white" />
          <Paragraph size="xxlarge" color="white">
            Contém <br /> <span>18 Nutrientes</span>
          </Paragraph>
        </Styles.Block>

        <Styles.Block>
          <FaCreditCard size={48} color="white" />
          <Paragraph size="xxlarge" color="white">
            Em até 12x
            <br /> <span>nos cartões</span>
          </Paragraph>
        </Styles.Block>

        <Styles.Block>
          <FaExpeditedssl size={48} color="white" />
          <Paragraph size="xxlarge" color="white">
            Site 100% seguro <br /> <span>certificado SSL</span>
          </Paragraph>
        </Styles.Block>
      </Styles.Wrapper>
    </Container>
  );
};

export default SectionInfos;
