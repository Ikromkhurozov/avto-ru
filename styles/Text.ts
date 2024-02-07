import styled from "styled-components";

import { ParagraphProps } from "@/utils/declarations/Styles";

export const CommonText = styled.p<ParagraphProps>`
  color: ${props => props.color || "#7F7F7F"};
  font-size: ${props => props.fontSize || "17px"};
  font-weight: ${props => props.fontWeight || 400};
  line-height: ${props => props.lineHeight || "17px"};
  margin: ${props => props.margin || "0"};
`;
