import styled from 'styled-components'

export const Container = styled.div`
   height: 100vh;
   width: 6%;
   background-color: #4365D0;
   display: flex;
   flex-direction: column;
   align-items: center;

`

export const ContButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 23vh;
   width: 6%;

`

export const Button = styled.button`
   height: 8vh;
   width: 8vh;
   border-radius: 15px;
   background-color: transparent;
   border: none;
   margin-top: 1vh;
   cursor: pointer;
   &:hover{
       background-color: #6881DA;
   }

   *{
      color: #fff;
      font-size: 26px;
   }
`
export const ContConfig = styled.button`
   height: 40vh;
   width: 8vh;
   border-radius: 15px;
   background-color: transparent;
   border: none;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: flex-end;
   
   button{
      background-color: transparent;
      border: none;
      cursor: pointer;
      margin-bottom: 2vh;
   }

   *{
      color: #fff;
      font-size: 26px;
   }
`

export const ContPerfil = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

export const ButtonPerfil = styled.button`
   height: 8vh;
   width: 8vh;
   margin-top: 4vh;
   border: none;
   border-radius: 100px;
   background-color: #fff;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   *{
      font-size: 48px;
      color: #bcbcbc;
      
   }
`