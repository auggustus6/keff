import styled, { css } from "styled-components";
import { Container } from "../../components/Container";

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    padding: 8.4rem 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    h2 {
      margin-bottom: 2rem;
    }
  `}
`;
