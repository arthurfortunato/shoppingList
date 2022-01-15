import { Button } from './styles';

import copyIcon from '../../assets/copy.svg';

import toast, { Toaster } from 'react-hot-toast';

type ListCodeProps = {
  code: string;
}

export function ListCode(props: ListCodeProps) {
  function copyListCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
    toast.success('Código copiado')
  }

  function codeList(code:any) {
    if(!!props.code) {
      return 'Código da Lista'
    }
  }

  return (
    <div>
    <Button onClick={copyListCodeToClipboard}>
      <div>
        <img src={copyIcon} alt="Copy List Code" />
      </div>
      <span>{codeList(props.code)}</span>
    </Button>
      <Toaster
          position="top-center"
          reverseOrder={false}
        />
    </div>
  )
}