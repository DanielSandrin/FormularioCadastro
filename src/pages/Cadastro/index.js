import {React, useState} from 'react';
import { MdAlternateEmail,MdPersonPin,MdPassword } from 'react-icons/md';
import Logo from '../../assets/logo.svg'

import { Container, Aside, Main,FormularioGroup, Acoes,GroupInput } from './styles';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function cadastrar(event){
    event.preventDefault()

    const dados = {
      "nome": nome,
      "email": email,
      "senha": senha
    }

    localStorage.setItem('Dados',JSON.stringify(dados));
    
    event.target.reset();
  }

  return (
    <Container>
      <Aside>
        <img src={Logo} alt="Cadastro de Pessoas" />
      </Aside>
      <Main>
        <FormularioGroup>
          <form onSubmit={cadastrar}>
            <GroupInput>
              <MdPersonPin size={25}/>
              <input type="text" placeholder='Nome' onChange={e => setNome(e.target.value)}/>
            </GroupInput>
            <GroupInput>
              <MdAlternateEmail size={25}/>
              <input type="text" placeholder='E-mail' onChange={e => setEmail(e.target.value)}/>
            </GroupInput>
            <GroupInput>
              <MdPassword size={25}/>
              <input type="password" placeholder='Senha' onChange={e => setSenha(e.target.value)}/>
            </GroupInput>
            <Acoes>
              <button type='submit'>Salvar</button>
            </Acoes>
          </form>
        </FormularioGroup>
      </Main>
    </Container>
  );
}

export default Cadastro;