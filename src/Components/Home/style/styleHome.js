import styled from 'styled-components'

export const Container = styled.section`
     background-color: #FBFBFB;
     height: 100vh;
     width: 100%;
     overflow-x: auto;
`

export const Comp = styled.div`
     margin-top: 20vh;
     margin-bottom: 10vh;
     display: grid;
     grid-template-columns: 30% 30% 30%;
     gap: 5vh;
`

export const Card = styled.div`
   
   background-color: #fff;
   height: 40vh;
   width:95%;
   border-radius: 15px;
   display: flex;
   flex-direction: column;
   padding: 2%;
   margin-left: 8%;


   
   box-shadow: 2px 2px 10px 0px rgb(0,0,0,0.05);
   overflow: hidden; // Removendo barra de rolagem
   text-overflow: ellipsis; // Adicionando "..." ao final
   display: -webkit-box;
   -webkit-line-clamp: 4; // Quantidade de linhas
   -webkit-box-orient: vertical;
`