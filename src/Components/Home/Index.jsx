import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Container, Card, Comp} from "./style/styleHome";

export default function Home(){
    const [resumos, setResumos]= useState([])

    const getResumos = async () =>{
        try{
            const res = await axios.get('https://api-resumo.onrender.com/resume')
            console.log(res.data)
            setResumos(res.data)
        }catch(e){
           console.log(e)
        }
    }

    useEffect(()=>{
        getResumos()
    }, [])

    return(
        <Container>
            <Comp>
                {resumos.map((item)=>(
                        <Card key={item.id}>
                            <h2>{item.titulo}</h2>
                            <p>{item.conteudo}</p>
                        </Card>
                    ))
                }
            </Comp>
                
        </Container>
    )
}