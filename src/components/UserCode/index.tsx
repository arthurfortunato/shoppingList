import {
  Container
} from './styles';

import copyIcon from '../../assets/copy.svg'
import toast, { Toaster } from 'react-hot-toast';

type UserCodeProps = {
  code: string
  label?: string
}

export function UserCode(props: UserCodeProps) {
  function copyUserCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
    toast.success('Código do utilizador copiado')
  }

  return (
    <Container>
      <button className="user-code" onClick={copyUserCodeToClipboard}>
        <div>
          <img src={copyIcon} alt="Copy user code" />
        </div>
        <span>User #{props.label || props.code}</span>
      </button>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </Container>
  )
} 
