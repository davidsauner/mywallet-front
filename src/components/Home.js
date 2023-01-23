
import styled from "styled-components";



export default function Home() {
 
  return (
    <HomeStyled>
      <header>
        <h1>Olá, .....</h1>
        <ion-icon name="log-out-outline" ></ion-icon>
      </header>
      <div>
        <Transactions>
        
            <span>Saldo</span>
            <span>R$ 00:00</span>
          
        </Transactions>
          <Button >
            Nova Entrada
          </Button>
          <Button >Nova Saída</Button>
       
      </div>
    </HomeStyled>
  );
}

const HomeStyled = styled.main`
  background-color: #8c11be;
  margin: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1rem;
    h1 {
      font-size: 2rem;
      font-weight: 700;
    }

    ion-icon {
      font-size: 2rem;
    }
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const Button = styled.button`
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
  width: 150px;
`;

const Transactions = styled.article`
  height: 500px;
  background-color: #fff;
  color: #000;
  border-radius: 0.3rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;
  }
  ul li div span {
    color: #c6c6c6;
    margin-right: 0.7rem;
  }

  article{
    font-size: 1.3rem;
    display: flex;
    justify-content: space-between;
  }
`;


