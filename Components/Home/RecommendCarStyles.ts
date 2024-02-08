import styled from "styled-components";

export const CarsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1240px;
  margin: 0 auto;
  padding: 20px 20px;
  
  @media (max-width: 768px){
    padding: 10px;
  }
`;

export const CarItem = styled.div`
  max-width: 260px;
  margin: 10px;
  cursor: pointer;
  
  img{
    border-radius: 10px;
    object-fit: cover;
    
    &:hover{
      object-fit: none;
    }
  }
`;

export const CarInfo = styled.div`
    display: flex;
    align-items: center;
  
  p{
    &:first-child:after{
      content: "/ ";
      padding:0 5px;
    }
  }

`

export const CarTitle = styled.p`
  margin: 5px 0;
  font-weight: bold;
`;