import styled from "styled-components";
import { ButtonProps } from "@/utils/declarations/Styles";

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "45px"};
  background: ${props => props.bgColor || "#E1EFFD"};
  color: ${props => props.color || "#000"};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  
  &:hover{
    background: ${props => props.hoveredBgColor || "#E1EFFD"};
  }
`;
