import React from "react";
import { Container, ContNote, ContRecentes, ContNotificacao, SubContRecentesNoti} from "../Create/style/styleCreate";

export  default function Create(){
    return(
        <Container>
            <ContNote>
                <input type="text" placeholder="Título"/>
                <textarea type="text" placeholder="Anotações"></textarea>
                <div>
                    <button>Criar</button>
                </div>
                
            </ContNote>
            <SubContRecentesNoti>
                <ContRecentes>
                   <h1>Recentes</h1>
                   <div>
                      
                   </div>
                </ContRecentes>
                <ContNotificacao>

                </ContNotificacao>
            </SubContRecentesNoti>
        </Container>
    )
}