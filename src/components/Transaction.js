
import styled from "styled-components";


export default function Transactions(props) {
  
  function handleForm(){}

  return (
    <NewTransactions>
      <Form>
        <Title>Nova Entrada</Title>

        <Input
          placeholder="Valor"
          name="value"
          type="text"
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        ></Input>
        <Input
          placeholder="Descrição"
          name="description"
          type="text"
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        ></Input>

        <Button >Salvar</Button>
      </Form>
    </NewTransactions>
  );
}

const NewTransactions = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  background-color: #a328d6;
  padding: 0.5rem;
  font-size: 1rem;
  margin-top: 1rem;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
`;
const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 0.3rem;

  :focus {
    border: 2px solid #ffb6b6;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #fff;
  padding-bottom: 1rem;
  font-family: 'Saira Stencil One', cursive;
`;