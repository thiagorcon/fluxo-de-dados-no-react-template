import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel } from "./FormularioPostagem.styled";

export const FormularioCadastro = ({titulo,setTitulo,descricao,setDescricao,imagem,setImagem,imagemAtualizada,setImagemAtualizada}) => {

function atualizarTitulo(event) {
  setTitulo(event.target.value)
}

function atualizarDescricao(event) {
  setDescricao(event.target.value)
}

function atualizarImagem(event) {
  setImagem(event.target.value)
  //console.log(event.target.value)
  
  }

function adicionarImagemCompleta(event){
event.preventDefault()
setImagemAtualizada(imagem)
}


  return (
    <FormContainer>
      <h1>Insira sua postagem abaixo: </h1>

      <Form onSubmit={adicionarImagemCompleta}>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={titulo} onChange={atualizarTitulo}  />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={imagem} onChange={atualizarImagem} />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={descricao} onChange={atualizarDescricao} />
        </StyledLabel>
      </Form>
      <button onClick={adicionarImagemCompleta}>Atualizar imagem</button>
    </FormContainer>
  );
};

export default FormularioCadastro;
