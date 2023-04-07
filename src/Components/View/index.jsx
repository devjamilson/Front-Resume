import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Container, Card, Comp, Pesquisar} from "./style/styleView";
import {BiSearch} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

export default function Home(){
    const [resumos, setResumos]= useState([])
    const [titulo, setTitulo] = useState('')


    const getResumos = async (id) =>{
        try{
            const res = await axios.get(`https://api-resumo.onrender.com/resume`)
            console.log(res.data)
            console.log(id)
            setResumos(res.data.reverse())
           
        }catch(e){
           console.log(e)
        }
    }


    const getDelete= async () =>{
        
        await axios.delete(`https://api-resumo.onrender.com/resume/`)
        
    }

    useEffect(()=>{
        getResumos()
    }, [])


    const formatDate = (e) =>{
       let data = e.slice(0, 10)
       let result = data.replace(/-/gi, '/')
       return result
    }

    const formatHour = (e) =>{
       let hour = e.slice(11, 16)
       return hour
    }

    const handlePesquisar = (e) =>{
        setTitulo(e.target.value)
    }



    return(
        <Container>
            <Pesquisar>
               <input type="text" placeholder="Informe o titulo para pesquisar..." value={titulo} onChange={handlePesquisar}/>
               <button onClick={getResumos}><BiSearch></BiSearch></button>
            </Pesquisar>
            <h1>Todos os Resumos:</h1>
            <Comp>
                {resumos.map((item)=>(
                        <Card key={item.id}>
                            <span>
                                <button onClick={getDelete}><MdDelete></MdDelete></button>
                                <h2>{item.titulo[0].toUpperCase()+item.titulo.substring(1)}</h2>
                            </span>
                            
                            <p>{item.conteudo}</p>
                            <div>
                                <span>{formatDate(item.createdAt)}</span>
                                <span>{formatHour(item.createdAt)}</span>
                            </div>
                        </Card>
                    ))
                }
            </Comp>
                
        </Container>
    )
}