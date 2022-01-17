import {
  Container,
  Aside,
  BodyContainer,
  Login,
  BoxLogin,
  Separator
} from './styles';

import illustration from '../../assets/illustration.svg';
import logo from '../../assets/logo.svg';
import google from '../../assets/google.svg';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';

import { database } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const Home = () => {
  const navigate = useNavigate()
  const { user, signInWithGoogle } = useAuth()
  const [listId, setListId] = useState<string>('')

  async function handleCreateList() {
    let userId = user?.id
    if (!user) userId = await signInWithGoogle()

    const databaseUser = await database.ref(`users/${userId}`).get()

    if (databaseUser.exists()) {
      navigate('/lists')
      return
    }

    navigate('/lists/new')
  }

  async function handleViewShoppingList(event: FormEvent) {
    event.preventDefault()

    if (listId.trim() === '') {
      toast.error('Insira o código da lista')
      return
    }
    const listRef = await database.ref(`lists/${listId}`).get()

    if (!listRef.exists()) {
      toast.error('Lista de compras inválida')
      return
    }

    if (listRef.val().completedAt) {
      toast.error('Lista já se encontra concluída')
      return
    }

    navigate(`/lists/${listId}`)
  }

  return (
    <Container>
      <Aside>
        <img src={logo} alt="Mulher com os braços levantados segurando sacolas de compras" />
        <strong>Crie listas de compras em tempo real!</strong>
        <p>Tenha a sua lista de compras na palma da mão.</p>
      </Aside>

      <BodyContainer>
        <BoxLogin>
          <Login>
            <img src={illustration} alt="Logo" />
            <button onClick={handleCreateList}>
              <img src={google} alt="Logo da empresa Google" />
              <p>Entre com a sua conta Google</p>
            </button>
            <Separator>ou veja uma lista de compras</Separator>
          </Login>

          <form onSubmit={handleViewShoppingList}>
            <Input
              type="text"
              placeholder="Insira o código da lista"
              value={listId}
              onChange={event => setListId(event.target.value)}
            />
            <div>
              <Button type="submit">
                Ver listas de compras
              </Button>
            </div>
          </form>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </BoxLogin>
      <Footer />
      </BodyContainer>
    </Container>
  )
}