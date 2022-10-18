import { FormContainer, Form, Input, SendButton, StyledLabel } from "./styled";

export const FormularioCadastro = () => {
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Título:
          <Input id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" />
        </StyledLabel>
        <SendButton>Enviar</SendButton>
      </Form>
    </FormContainer>
  );
};
