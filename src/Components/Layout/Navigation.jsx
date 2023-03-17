import React from "react";

import { Container, Button,ButtonPerfil, ContButton, ContPerfil, ContConfig} from "./style/styleNav";
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsFillGridFill, BsPencilFill, BsPersonCircle} from 'react-icons/bs'
import {IoMdSettings} from 'react-icons/io'

export function Navigation(){
    return(<>
            <Container>
                <ContPerfil>
                        <Link to='/perfil'>
                            <ButtonPerfil>
                                <BsPersonCircle></BsPersonCircle>
                            </ButtonPerfil>
                        </Link>
                </ContPerfil>
                <ContButton>
                        <Link to='/'>
                            <Button>
                                <AiFillHome></AiFillHome>
                            </Button>
                        </Link>
                        
                        <Link to='/create'>
                            <Button>
                                <BsPencilFill></BsPencilFill>
                            </Button>
                        </Link>
                        <Link to='/view'>
                            <Button>
                                <BsFillGridFill></BsFillGridFill>
                            </Button>
                        </Link>
                </ContButton>
                <ContConfig>
                    <button>
                        <IoMdSettings></IoMdSettings>
                    </button>
                </ContConfig>
             </Container>
    </>
            
         
    )
}