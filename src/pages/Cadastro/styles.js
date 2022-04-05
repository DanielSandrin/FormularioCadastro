import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Aside = styled.aside`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  img{
    height: 70%;
    margin: 0 32px;
  }
`;

export const Main = styled.main`
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  form{
    width:30vw;
  }

`;

export const FormularioGroup = styled.div`
  display: flex;
  align-items: center;

  background-color: #2c2c32;  
  padding: 0 32px 0 32px;
  width: 100%;
  height: 50%;
  border-radius: 15px;   
  box-shadow: 0 0 1em black;
`;

export const GroupInput = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #535353;
  border-radius: 5px;
  background-color: #121214;

  svg{
    height: 100%;
    margin: 0 10px;
    color: #353434;
  }

  input{
    background: transparent;
    border: transparent;
    color: #fff;
  
  }

  & + div{
      margin-top: 8px;
    }

  &:focus-within, :hover{
    border-color: #6c63ff;

    svg{
      color: #6c63ff;
    }
  }
`;

export const Acoes = styled.div`
  width: 100%;

  button{
    width: 100%;
    margin-top: 8px;
    background: transparent;
    border: 1px solid #6c63ff;
    transition: hover 2s;

    &:hover{
      background: #6c63ff;
    }
  }
`;