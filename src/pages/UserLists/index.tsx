import {
  Container,
  Header,
  HeaderButtons,
  ButtonSignOut,
  BodyContainer,
  Title,
  Content
} from './styles';

import logoImg from '../../assets/logo.svg';
import { RiFileAddLine, RiLogoutBoxRLine } from 'react-icons/ri';

import { Button } from '../../components/Button';
import { List } from '../../components/List';
import { UserCode } from '../../components/UserCode';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useList } from '../../hooks/useList';

export function UserLists() {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()
  const { lists, removeList, clearLists } = useList()

  function handleCreateShoppingList() {
    navigate('/lists/new')
  }

  function handleGoToShoppingList(listId: string) {
    navigate(`/lists/${listId}`)
  }

  async function handleDeleteList(listId: string) {
    removeList(listId)
  }

  async function handleSignOut() {
    await signOut()
    clearLists()

    navigate('/')
  }

  return (
    <Container id="page-user-lists">
      <Header>
        <HeaderButtons>
            <img src={logoImg} alt="Vamos Comprar" className="logo"/>
          <div>
            <UserCode code={user?.id || ''} label={user?.name || ''} />
            <Button headerButton isOutlined onClick={handleCreateShoppingList}>
              <RiFileAddLine />{' '}
              <span className="text">Criar lista de compras</span>
            </Button>
            <ButtonSignOut
              type="button"
              className="exit-button"
              onClick={handleSignOut}
            >
              <RiLogoutBoxRLine size={"20px"} />
            </ButtonSignOut>
          </div>
        </HeaderButtons>
      </Header>

      <BodyContainer>
        <Title className="list-title">
          <h1>Listas de compras</h1>
          <span>
            {Object.values(lists ?? {}).reduce(
              (sum, { missingProducts }) => sum + missingProducts,
              0
            )}{' '}
            produto(s) em falta
          </span>
        </Title>

        <Content className="main-content">
          {Object.entries(lists ?? {}).map(([key, list]) => {
            return (
              <List
                key={key}
                title={list.title}
                missingProducts={list.missingProducts}
                productsCount={list.productsCount}
                author={list.author}
                isFromUser={user?.id === list.author.id}
                handleGoToShoppingList={() => handleGoToShoppingList(key)}
                handleDeleteList={() => handleDeleteList(key)}
              />
            )
          })}
        </Content>
      </BodyContainer>
    </Container>
  )
}
