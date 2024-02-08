import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 15px 15px;
`

export const LogoWrapper = styled.div`
    cursor: pointer;
`

// must restyling
export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #F0F1F3;
  padding: 0 12px;
  border-radius: 8px;
  width: 100%;
  max-width: 290px;
  &:hover{
    border: 1px solid #0C78ED;
    background-color: #fff;
  }
  
  input{
    background-color: #F0F1F3;
    border: none;
    padding: 15px 0 15px 8px;
    outline: none;
    width: 100%;
    max-width: 390px;
    font-size: 16px;
    box-sizing: border-box;
    
    &:hover{
      background-color: #fff;
    }
    

    &::placeholder{
      font-size: 16px;
    }
  }
`

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  
  p{
    &:hover{
      color: #E60000;
    }
  }
  
  &:not(:last-child){
    margin-right: 25px;
  }
`

export const LanguageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
`;

export const SelectedLang = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #000;

  div {
    margin-left: 5px;
  }
`;

export const LanguageList = styled.ul`
  list-style-type: none;
  position: fixed;
  margin: 3rem 0 0 -2rem;
  z-index: 4;
  background: #E1EFFD;
  border: 1px solid #0C78ED;
  border-radius: 10px;
  padding: 0.5rem .5rem 0.7rem .5rem;
  cursor: auto;
  width: 60px;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: -13px;
    left: 45px;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 14px solid #0C78ED;
    box-sizing: border-box;
  }

  li {
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    height: auto;
    color: #0C78ED;

    &:first-child {
      margin-top: 0;
    }

    a {
      display: flex;
      align-items: center;

      span {
        margin-left: 5px;
        font-size: 17px;
        font-weight: 400;
      }
    }
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #E60000;
  padding: 12px;
  color: #fff;
`

export const CatalogContainer = styled.div`
  border-bottom: 1px solid rgba(197, 197, 197, 0.89);
`

export const LoginContent = styled.div`
  padding: 50px 50px;
  text-align: center;
  
  p{
    &:last-child{
      max-width: 290px;
      text-align: center;
    }
  }

`

export const LoginActions = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-top: 10px;
  
  button{
    &:first-child{
      margin-left: 20px;
    }
    
    &:last-child{
      width: 100%;
    }
  }
  
`

export const LoginInput = styled.input`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px 20px;
  border: none;
  background-color: #F0F1F3;
  outline: none;
  border-radius: 8px;
  max-width: 100%;
  min-width: 250px;
  font-size: 17px;
  margin-top: 20px;
  
  &::placeholder{
    font-size: 16px;
    font-weight: 300;
  }
  
  &:focus{
    border: 1px solid #0C78ED;
  }
`
