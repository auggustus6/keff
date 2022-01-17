import theme from "styles/theme";
import * as Styles from "./styles";
import { Collapse } from "react-collapse";
import Paragraph from "components/Paragraph";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

type CustomCollapseProps = {
  question: string;
  answer: string;
};

const CustomCollapse = ({ question, answer }: CustomCollapseProps) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Styles.Wrapper>
      <Styles.ContainerInfo onClick={() => setIsOpened(!isOpened)}>
        <Paragraph size="large" color={theme.colors.white}>
          {question}
        </Paragraph>

        <FaPlus size={28} color={theme.colors.white} />
      </Styles.ContainerInfo>
      <Collapse isOpened={isOpened}>
        <Styles.Block>
          <Paragraph size="medium" color={theme.colors.white}>
            {answer}
          </Paragraph>
        </Styles.Block>
      </Collapse>
    </Styles.Wrapper>
  );
};

export default CustomCollapse;
