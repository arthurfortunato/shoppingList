import {
  Container
} from './styles';

import copyIcon from '../../assets/copy.svg'

type UserCodeProps = {
  code: string
  label?: string
}

export function UserCode(props: UserCodeProps) {
  function copyUserCodeToClipboard() {
    try {
      navigator.clipboard.writeText(props.code)
      alert('Código do utilizador copiado')
    } catch (err) {
     alert('Erro ao copiar código')
     alert('O código do utilizador é ' + props.code)
    }
  }

  return (
    <Container className="user-code" onClick={copyUserCodeToClipboard}>
      <div>
        <img src={copyIcon} alt="Copy user code" />
      </div>
      <span>User #{props.label || props.code}</span>
    </Container>
  )
} 
