import styled from 'styled-components'

export const Container = styled.div`
   background-color: #FBFBFB;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
`
export const ContNote = styled.div`
   background-color: #fff;
   height: 90vh;
   border-radius: 20px;
   box-shadow: 2px 2px 10px 0px rgb(0,0,0,0.15);
   width: 45%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   input{
        border-radius: 10px;
        height: 6vh;
        width: 92%;
        outline: none;
        border: none;
        background-color: #F5F5F5;
        padding-left: 15px;
        font-size: 18px;
        font-weight: bold;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }
   textarea{
        border: none;
        background-color: #F5F5F5;
        border-radius: 10px;
        width: 92%;
        padding-left: 15px;
        padding-top: 10px;
        margin-top: 2vh;
        height: 70vh;
        resize: none;
        outline: none;
        font-size: 18px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }
   div{ 
        margin-top: 2vh;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: row;
        button{
            margin-right: 2.5%;
            border: none;
            background-color: #4365D0;
            color: #fff;
            height: 5vh;
            border-radius: 9px;
            width:14%;
            cursor: pointer;
        }
   }
`

export const SubContRecentesNoti = styled.div`
   width: 50%;
`

export const ContRecentes = styled.div`
   background-color: transparent;
   height: 80vh;
   margin-left: 4%;
   h1{
        font-size: 20px;
        font-weight: normal;
        color: #959595;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }
`
export const ContNotificacao = styled.div`
   background-color: #FBFBFB;
`