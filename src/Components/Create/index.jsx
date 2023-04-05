import React, {useEffect, useState} from "react";
import { Container, ContNote, ContRecentes, ContNotificacao, SubContRecentesNoti,Comp, CardRecentes} from "../Create/style/styleCreate";
import axios from 'axios'



export  default function Create(){
    const [resumos, setResumos]= useState([])
    const [titulo, setTitulo]= useState('')
    const [conteudo, setConteudo]= useState('')

    const getResumos = async () =>{
        try{
            const res = await axios.get('https://api-resumo.onrender.com/resume')
            console.log(res.data)
            setResumos(res.data)
        }catch(e){
           console.log(e)
        }
    }



    const handleTitulo =(event)=>{
        setTitulo(event.target.value);
    }

    
    const handleConteudo = (event)=>{
        setConteudo(event.target.value);
    }

    const setResumo = async () =>{
        try{
            const res = await axios.post('https://api-resumo.onrender.com/resume', {titulo: titulo, conteudo: conteudo})
            console.log(res.data)
        }catch(e){
           console.log(e)
        }
    }

    useEffect(()=>{
        getResumos()
    }, [])

    return(
        <Container>
            <ContNote >
                <input name='titulo' type="text" placeholder="Título" value={titulo} onChange={handleTitulo}/>
                <textarea name='conteudo' type="text" placeholder="Anotações" value={conteudo} onChange={handleConteudo}></textarea>
                <button onClick={setResumo}>Criar</button>
            </ContNote>
            <SubContRecentesNoti>
                <ContRecentes>
                   <h1>Recentes</h1>
                   <Comp>
                      {resumos.map((item)=>(
                            <CardRecentes key={item.id}>
                                <h2>{item.titulo}</h2>
                                <p>{item.conteudo}</p>
                            </CardRecentes>
                      ))
                      }
                   </Comp>
                </ContRecentes>
            </SubContRecentesNoti>
        </Container>
    )
}