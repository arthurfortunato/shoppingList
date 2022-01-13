import {
  Container,
  Header
} from './styles';

import logo from '../../assets/logo.svg';

import { ListCode } from '../../components/ListCode';

import { useState } from 'react';

type List = {
  title: string;
}


export const List = () => {
  const [list, setList] = useState<List>()

  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo" />
        <ListCode code={'teste'}/>
      </Header>

      <main>
        <div>
          <h1>{}</h1>
        </div>
      </main>
    </Container>
  )
}