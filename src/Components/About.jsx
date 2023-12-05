import React from "react";
import styled from "styled-components";


// Styled component para o card

const Body = styled.div`
  background-color: #0B0B0B;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`


  width: 60vw;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(107, 8, 153, 0.5);
  background-color: #0B0B0B;
  margin: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
`;

// Styled component para o conteúdo do card
const CardContent = styled.div`
  text-align: center;
`;

// Styled component para o título do card
const CardTitle = styled.h2`
  color: #ffff;
  font-size: 50px;
`;

// Styled component para a descrição do card
const CardDescription = styled.p`
  color: #666666;
`;



export default function About() {
    return (
        <>
            <Body>
                <Card>
                    <CardContent>
                        <CardTitle>Sobre mim</CardTitle>
                        <CardImage></CardImage>
                        <CardDescription>
                            Aqui vai conter um texto sobre mim. Pretendo contar um pouco da minha história e 
                            o que me fez chegar na tecnologia
                        </CardDescription>
                    </CardContent>
                </Card>
            </Body>
        </>
    )
}