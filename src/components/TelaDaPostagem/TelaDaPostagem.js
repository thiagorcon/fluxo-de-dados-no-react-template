import React from "react";
import { ContainerPostagem, Title, Image, Description } from "./TelaDaPostagem.styled";

const TelaDaPostagem = ({titulo,descricao,imagemAtualizada}) => {
  console.log(imagemAtualizada);
  return (
    <ContainerPostagem>
      <Title >{titulo}</Title>
      {/* <Image src={"https://picsum.photos/536/354"} /> */}
      <Image src={imagemAtualizada} />
      <Description>{descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;

// falta mexer na imagem para ele mudar dinamicamente
