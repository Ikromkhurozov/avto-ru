import styled from "styled-components";

export const MenuPanelContainer = styled.div`
  position: absolute;
  z-index: 10;
  background-color: #fff;
  top: 4.4rem;
  box-shadow: 0 10px 30px #D1D5DF7F;
  border-radius: 0 0 20px 20px;
  display: flex;
  left: 0;
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: -13px;
    left: 10%;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 25px solid #fff;
    box-sizing: border-box;
  }
`

export const MenuPanelWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1240px;
  padding: 10px 15px;
  margin: 0 auto;
`

export const PanelColumnsWrapper = styled.div`
  margin-right: 68px;
  cursor: default;
`

export const PanelColumn = styled.ul`
  padding-left: 0;
  
  li{
    padding-bottom: 8px;
    list-style-type: none;
    font-size: 14px;

    &:hover{
      color: #E60000;
    }
  }
`

export const PanelTitleColumn = styled.ul`
  padding-left: 0;

  li{
    padding-bottom: 16px;
    list-style-type: none;
    font-size: 15px;
    line-height: 18px;

    &:hover{
      color: #E60000;
    }
  }
`

export const ColumnTitle = styled.li`
  font-weight: 700;
  font-size: 17px;
  padding-bottom: 16px;
  color: #000;
  list-style-type: none;
  margin-right: 68px;
  
  &:hover{
    color: #E60000;
  }
  
  &:nth-child(-3n+5):after, &:last-child:after{
    content: "new";
    padding: 3px 8px;
    background-color: #E60000;
    color: #fff;
    font-size: 10px;
    border-radius: 10px;
    margin-left: 5px;
  }
`

