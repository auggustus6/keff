import styled, { css } from "styled-components";
import { Container } from "../../components/Container";

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    padding: 8.4rem 0;

    h2 {
      margin-bottom: 2rem;
    }

    p {
      margin-bottom: 2rem;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacings.small};
  `}
`;
