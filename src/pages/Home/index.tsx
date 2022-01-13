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
          <Login>
            <img src={logo} alt="Logo" />
            <button>
              <img src={google} alt="Logo da empresa Google" />
              <p>Entre com a sua conta Google</p>
            </button>
            <Separator>ou veja uma lista de compras</Separator>
          </Login>

          <form>
            <Input
              type="text"
              placeholder="Insira o código da lista"
            />
            <div>
              <Button type="submit">
                Ver listas de compras
              </Button>
            </div>
          </form>
        </BoxLogin>
      </BodyContainer>
    </Container>
  )
}