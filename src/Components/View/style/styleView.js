import styled from 'styled-components'

export const Container = styled.section`
     background-color: #FBFBFB;
     height: 100vh;
     width: 100%;
     overflow-x: auto;

     
   h1{
        margin-top: 10vh;
        margin-left: 3%;
        font-size: 26px;
        font-weight: normal;
        color: #959595;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }
`

export const Comp = styled.div`
     margin-top: 5vh;
     margin-bottom: 10vh;
     display: grid;
     grid-template-columns: 30% 30% 30%;
     gap: 5vh;
`

export const Card = styled.div`
   
   background-color: #fff;
   height: 40vh;
   width:90%;
   border-radius: 15px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 6%;
   margin-left: 8%;


   
   box-shadow: 2px 2px 10px 0px rgb(0,0,0,0.05);
   overflow: hidden; // Removendo barra de rolagem
   text-overflow: ellipsis; // Adicionando "..." ao final
   display: -webkit-box;
   -webkit-line-clamp: auto; // Quantidade de linhas
   -webkit-box-orient: vertical;


   h2{
    margin: 0;
   }

   div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span{
      color: #959595;
    }
   }

`

export const Pesquisar = styled.form`
   height: 7vh;
   background-color: #fff;
   width: 28.5%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   margin-top: 4vh;
   margin-left: 3%; 
   box-shadow: 2px 2px 10px 0px rgb(0,0,0,0.05);
   border-radius: 15px;
   padding-left: 10px;
   padding-right: 5px;
   input{
    border: none;
    padding-left: 15px;
    width: 75%;
    outline: none;
    font-size: 16px;
   
   }

   button{
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    *{
      font-size: 24px;
      color: #4365D0;
    }
   }
`