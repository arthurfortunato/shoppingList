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

export const NewList = () => {
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

          <form>
            <Input
              type="text"
              placeholder="Nome da lista"
            />
            <div>
              <Button>
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