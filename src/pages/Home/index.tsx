import {
  Container,
  Aside,
  BodyContainer,
  BoxLogin,
  Separator
} from './styles';

import illustration from '../../assets/illustration.svg';
import logo from '../../assets/logo.svg';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export const Home = () => {
  return (
    <Container>
      <Aside>
        <img src={illustration} alt="Mulher com os braços levantados segurando sacolas de compras" />
        <strong>Crie listas de compras em tempo real!</strong>
        <p>Tenha a sua lista de compras na palma da mão.</p>
      </Aside>

      <BodyContainer>
        <BoxLogin>
          <div>
            <img src={logo} alt="Logo" />
            <button>
              Entre com a sua conta Google
            </button>
            <Separator>ou veja uma lista de compras</Separator>
          </div>

          <form>
            <Input
              type="text"
              placeholder="Insira o código da lista"
            />
            <div>
              <Button>
                Ver listas de compras
              </Button>
            </div>
          </form>
        </BoxLogin>
      </BodyContainer>
    </Container>
  )
}