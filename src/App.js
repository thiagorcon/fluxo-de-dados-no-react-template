import styled, { createGlobalStyle } from "styled-components";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [titulo,setTitulo] = useState('')
  const [descricao,setDescricao] = useState('')
  const [imagem,setImagem] = useState('')
  const [imagemAtualizada,setImagemAtualizada] = useState('')
  
  console.log('imagem atualizada :', imagemAtualizada);
  return (
    <>
      <GlobalStyle />

      <Container>

        <FormularioPostagem titulo={titulo} descricao={descricao} setTitulo={setTitulo} setDescricao={setDescricao} imagem={imagem} setImagem={setImagem} imagemAtualizada={imagemAtualizada} setImagemAtualizada={setImagemAtualizada}/>

        <TelaDaPostagem titulo={titulo} descricao={descricao} setTitulo={setTitulo} setDescricao={setDescricao}  imagemAtualizada={imagemAtualizada}/>

      </Container>
    </>
  );
}

export default App;
