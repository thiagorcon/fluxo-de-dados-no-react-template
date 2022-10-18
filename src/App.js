import styled, { createGlobalStyle } from "styled-components";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
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
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [postData, setPostData] = useState({})

  const onChangeImage = (event) => {
    setImage(event.target.value)
  }

  const onChangeDescription = (event) => {
    setDescription(event.target.value)
  }
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro onChangeDescription={onChangeDescription} onChangeImage={onChangeImage} image={image} description={description} setImage={setImage} 
          setDescription={setDescription}/>
        </aside>
        <TelaDaPostagem image={image} description={description}/>
      </Container>
    </>
  );
}

export default App;
