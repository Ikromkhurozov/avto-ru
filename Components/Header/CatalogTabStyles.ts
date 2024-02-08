import styled from "styled-components";

export const CatalogTabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 10px 15px;
`

export const CatalogsWrapper = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  
  li{
    list-style: none;
    transition: all ease .2s;
    cursor:pointer;
    color: #7F7F7F;
    
    &:not(:last-child){
      margin-right:30px;

    }
    &:hover{
      color: #E60000;
    }
  }

`

export const SelectRegion = styled.div`
  display: flex;
  align-items: center;
  
  &:hover{
    color: red;
  }
`