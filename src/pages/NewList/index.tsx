import {
  Container,
  Aside,
  BodyContainer,
  BoxNewList
} from './styles';

import illustration from '../../assets/illustration.svg';
import logo from '../../assets/logo.svg'

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { FormEvent, useState } from 'react';
import { database } from '../../services/firebase';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';

export const NewList = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [newList, setNewList] = useState('');

  async function handleCreateList(event: FormEvent) {
    event.preventDefault();

    if (newList.trim() === '') {
      alert('Create list name')
      return;
    }

    const listRef = database.ref('lists');

    const firebaseList = await listRef.push({
      title: newList,
      userId: user?.id
    })
    navigate(`/lists/${firebaseList.key}`)
  }

  return (
    <Container>
      <Aside>
        <img src={illustration} alt="Mulher com os braços levantados segurando sacolas de compras" />
        <strong>Crie listas de compras em tempo real!</strong>
        <p>Tenha a sua lista de compras na palma da mão.</p>
      </Aside>

      <BodyContainer>
        <BoxNewList>
          <img src={logo} alt="Logo" />
          <h2>Criar uma nova lista</h2>

          <form onSubmit={handleCreateList}>
            <Input
              type="text"
              placeholder="Nome da lista"
              value={newList}
              onChange={event => setNewList(event.target.value)}
            />
            <div>
              <Button type="submit">
                Criar lista
              </Button>
            </div>
          </form>

          <p>
            Quer entrar em uma lista existente?
          </p>
        </BoxNewList>
      </BodyContainer>
    </Container>
  )
}