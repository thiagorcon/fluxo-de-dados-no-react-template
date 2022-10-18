import { FormContainer, Form, Input, SendButton, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {
 
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.image} onChange={props.onChangeImage}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.description} onChange={props.onChangeDescription}/>
        </StyledLabel>
        <SendButton>Enviar</SendButton>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro