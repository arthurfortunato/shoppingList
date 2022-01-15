import {
  Container,
  Header,
  BodyContainer
} from './styles';

import {
  RiDeleteBin7Line,
  RiShoppingBasketLine,
} from 'react-icons/ri';

import { CgLogIn } from 'react-icons/cg';

type ListProps = {
  title: string
  missingProducts: number
  productsCount: number
  author: { id: string; name: string; avatar: string }
  isFromUser: boolean
  handleGoToShoppingList: () => void
  handleDeleteList: () => Promise<void>
}

export function List({
  title,
  missingProducts,
  productsCount,
  author,
  isFromUser,
  handleGoToShoppingList,
  handleDeleteList,
}: ListProps) {
  return (
    <Container>
      <Header className="card-header">
        <h3>{title}</h3>
        <span>
          {productsCount - missingProducts}/{productsCount}{' '}
          <RiShoppingBasketLine />
        </span>
      </Header>
      <BodyContainer className="card-main">
        <span>Criada por</span>
        <div className="card-footer">
          <div className="user-info">
            <img src={author.avatar} alt={author.name} />
            <p>{author.name}</p>
          </div>
          <div className="options">
            {isFromUser && (
              <button type="button" onClick={handleDeleteList}>
                <RiDeleteBin7Line />
              </button>
            )}
            <button type="button" onClick={handleGoToShoppingList}>
              <CgLogIn className="highlighted"/>
            </button>
          </div>
        </div>
      </BodyContainer>
    </Container>
  )
}
