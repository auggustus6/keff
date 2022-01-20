import Paragraph from "components/Paragraph";
import Title from "components/Title";
import { useTheme } from "styled-components";
import * as Styles from "./styles";

type CardFeatureProps = {
  title: string;
  description: string | React.ReactNode;
  icon: string;
  alt?: string;
};

const CardFeature = ({ title, description, icon, alt }: CardFeatureProps) => {
  const theme = useTheme();
  return (
    <Styles.Wrapper>
      <img src={icon} alt={alt} />
      <Title size="xlarge" bold color={theme.colors.tertiary}>
        {title}
      </Title>
      <Styles.HideContainer>
        <Paragraph size="medium" color={theme.colors.black}>
          {description}
        </Paragraph>
      </Styles.HideContainer>
    </Styles.Wrapper>
  );
};

export default CardFeature;
