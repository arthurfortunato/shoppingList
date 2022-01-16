import {
  Container,
  Header,
  BodyContainer,
  Title,
  Content,
  ProductList,
  Separator,
  ModalContent
} from './styles';

import {
  RiAddCircleLine,
  RiDeleteBin7Line,
  RiUserAddLine,
} from 'react-icons/ri';

import { FormEvent, useEffect, useState } from 'react';

import Modal from 'react-modal';

import { ListCode } from '../../components/ListCode';
import { Product } from '../../components/Product';
import { Button } from '../../components/Button';
import logo from '../../assets/lists.png';

import { database } from '../../services/firebase';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useList } from '../../hooks/useList';
import { useAuth } from '../../hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';

type User = {
  id: string
  name: string
  avatar: string
}

type ProductType = {
  id: string
  name: string
}

type List = {
  title: string
  author: User
  users: User[]
  missingProducts: number
  checkedProducts: ProductType[]
  toCheckProducts: ProductType[]
}

type FirebaseList = {
  author: User
  title: string
  users: User[]
  products: Record<
    string,
    {
      name: string
      isChecked: boolean
    }
  >
  isCompleted: boolean
}

type ShoppingListParams = {
  listId: string
}

export function ShoppingList() {
  const navigate = useNavigate()
  const params = useParams<ShoppingListParams>()
  const { user } = useAuth()

  const [newProduct, setNewProduct] = useState<string>('')
  const [newUserId, setNewUserId] = useState<string>('')
  const [list, setList] = useState<List>()
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  const listId = params.listId!

  const { lists } = useList()

  useEffect(() => {
    setIsDisabled(
      !user ||
      (list?.author.id !== user?.id &&
        !list?.users.find((val) => val.id === user?.id))
    )
  }, [user, list])

  useEffect(() => {
    async function handleList() {
      const checked: ProductType[] = []
      const toCheck: ProductType[] = []
      let list = lists[listId]

      if (list) {
        list.products.forEach((product) => {
          const productToAdd = { id: product.id, name: product.name }
          if (product.isChecked) checked.push(productToAdd)
          else toCheck.push(productToAdd)
        })

        setList({
          title: list.title,
          author: list.author,
          missingProducts: toCheck.length,
          toCheckProducts: toCheck,
          checkedProducts: checked,
          users: list.users,
        })
      } else {
        const listRef = await database.ref(`/lists/${listId}`).get()

        if (!listRef.exists()) {
          navigate('/')
          return
        }

        const databaseList: FirebaseList = listRef.val()
        Object.entries(databaseList.products ?? {}).forEach(([key, value]) => {
          const productToAdd = { id: key, name: value.name }
          if (value.isChecked) checked.push(productToAdd)
          else toCheck.push(productToAdd)
        })
        const users = Object.entries(databaseList.users || {}).map(
          ([key, value]) => {
            return { id: key, name: value.name, avatar: value.avatar }
          }
        )
        setList({
          title: databaseList.title,
          author: databaseList.author,
          missingProducts: toCheck.length,
          toCheckProducts: toCheck,
          checkedProducts: checked,
          users: users,
        })
      }
    }

    handleList()
  }, [lists, listId, navigate])

  async function handleAddProduct(event: FormEvent) {
    event.preventDefault()

    if (newProduct.trim() === '') return

    if (
      list &&
      user &&
      (list.author.id === user.id ||
        list.users.find((value) => user.id === value.id))
    ) {
      await database
        .ref(`lists/${listId}/products`)
        .push({ name: newProduct, isChecked: false })
      setNewProduct('')
    }
  }

  async function handleToggleChecked(productId: string, isChecked: boolean) {
    await database
      .ref(`lists/${listId}/products/${productId}`)
      .update({ isChecked: !isChecked })
  }

  async function handleDeleteProduct(productId: string) {
    await database.ref(`lists/${listId}/products/${productId}`).remove()
  }

  async function addUser(event: FormEvent) {
    event.preventDefault()

    if (newUserId.trim() === '') return

    const databaseUser = await database.ref(`/users/${newUserId}`).get()

    if (!databaseUser.exists()) {
      toast.error('O ID do usuário é inválido')
      return
    }

    if (newUserId.trim() === user?.id) {
      toast('Não se preocupe! Você já está na lista :)', {
        icon: '👏'
      })
      return
    }

    await database.ref(`/users/${newUserId}/lists/${listId}`).set(list?.title)
    await database.ref(`/lists/${listId}/users/${newUserId}`).update({
      avatar: databaseUser.val().avatar,
      name: databaseUser.val().name,
    })
  }

  return (
    <Container>
      <Header>
        <Link to={user ? '/lists' : '/'}>
          <img src={logo} alt="Vamos Comprar" />
        </Link>
        <div>
          <ListCode code={listId} />
          {user?.id === list?.author.id && (
            <Button
              headerButton
              onClick={() => setModalOpen(true)}
              isOutlined
              className="add"
            >
              <RiUserAddLine />
              <span className="text">Adicionar pessoas</span>
            </Button>
          )}
        </div>
      </Header>

      <BodyContainer>
        <Title>
          <h1>{list?.title}</h1>
          <span>{list?.missingProducts || 0} produto(s) em falta</span>
        </Title>

        <Content>
          <form onSubmit={handleAddProduct}>
            <input
              type="text"
              placeholder="Insira o nome do produto..."
              onChange={(event) => setNewProduct(event.target.value)}
              value={newProduct}
              disabled={isDisabled}
            />
            <Button headerButton type="submit" disabled={!user}>
              <RiAddCircleLine />
              <span className="text">Adicionar produto</span>
            </Button>
          </form>

          <ProductList>
            {list?.toCheckProducts.map((product) => (
              <Product
                disabled={isDisabled}
                key={product.id}
                name={product.name}
                isChecked={false}
                onToggleCheck={() => handleToggleChecked(product.id, false)}
              >
                {!isDisabled && (
                  <button
                    type="button"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <RiDeleteBin7Line />
                  </button>
                )}
              </Product>
            ))}
          </ProductList>
          {list && list.checkedProducts.length > 0 && (
            <Separator>
              <div className="separator">Produtos adquiridos</div>
              <ProductList className="product-list">
                {list.checkedProducts.map((product) => (
                  <Product
                    key={product.id}
                    name={product.name}
                    isChecked
                    disabled={isDisabled}
                    onToggleCheck={() => handleToggleChecked(product.id, true)}
                  />
                ))}
              </ProductList>
            </Separator>
          )}
        </Content>
      </BodyContainer>
      <Modal
        shouldCloseOnEsc
        onRequestClose={() => setModalOpen(false)}
        ariaHideApp={false}
        isOpen={isModalOpen}
        id="add-user-to-list"
      >
        <ModalContent>
          <h2>Adicionar usuário à sua lista</h2>
          <p>
            Insira o ID do usuário que deseja adicionar
            <br />O seu ID é <strong>{user?.id}</strong>
          </p>
          <span>Usuário já adicionado!</span>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <div className="users-list">
            {list?.users?.map((user) => {
              return (
                <div key={user.id} className="user-info">
                  <img src={user.avatar} alt={user.name} />
                  <p>{user.name}</p>
                </div>
              )
            })}
          </div>
          <form onSubmit={addUser}>
            <input
              type="text"
              placeholder="Digite o ID"
              onChange={(event) => setNewUserId(event.target.value)}
              value={newUserId}
            />
            <Button type="submit" disabled={isDisabled}>
              Adicionar usuário
            </Button>
          </form>
        </ModalContent>
      </Modal>
    </Container>
  )
}
