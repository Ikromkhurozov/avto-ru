import styled from "styled-components";

export const NavigationList = styled.ul`
  width: 100%;
  max-width: 1240px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;


  li {
    list-style-type: none;
    transition: all ease .2s;

    &:hover {
      color: rgba(255, 255, 255, 0.87);
    }
  }

`