import styled from "styled-components";
import media from "styled-media-query";

export const LogoWrapper = styled.img`
  width: 15rem;
  cursor: pointer;

  ${media.lessThan("medium")`
    width: 15rem;
  `}
`;
