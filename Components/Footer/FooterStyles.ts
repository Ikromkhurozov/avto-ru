import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 15px;
`

export const ServicesWrapper = styled.div`
    display: flex;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #C5C5C5E2;
  
  a{
    color: #0C78ED;
    transition: all ease .2s;
    
    &:not(:last-child){
      margin-right: 50px;
    }
    
    &:hover{
      color: #E60000;
    }
  }
`

export const RegionsWrapper  = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #C5C5C5E2;
  
`

export const RegionColumns  = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  gap: 0  150px;
  
  a{
    padding: 5px 0;
    font-weight: 500;
    font-size: 17px;
    line-height: 19px;
    
    &:hover{
      color: #E60000;
    }
  }
  
`

export const SeoText  = styled.div`
  display: flex;
  margin-bottom: 30px;

    p{
     line-height: 25px;
     font-size: 15px;
     
      &:first-child{
        width: 40%;
        padding-right: 30px;
      }
      
      &:last-child{
        width: 45%;
      }
    }
`

export const BaseLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  color: #7F7F7F;
  
  a{
    &:hover{
      color: #E60000;  
    }
    
    &:not(:last-child){
      padding: 0 30px;
    }
  }
`

export const BaseLinksContent = styled.div`
  display: flex;
  align-items: center;
`

export const SocialsWrapper = styled.div`
  display: flex;
  
  svg{
    margin: 5px;
    cursor: pointer;
  }
`

export const Owner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 50px;
  
  p{
    &:last-child{
      color: #000;
      font-size: 18px;
      line-height: 22px;
      font-weight: bold;
      &:first-letter{
        color: red;
      }
    }
  }
`


