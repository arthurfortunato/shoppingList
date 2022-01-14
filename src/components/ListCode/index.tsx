import { Button } from './styles';

import copyIcon from '../../assets/copy.svg';

type ListCodeProps = {
  code: string;
}

export function ListCode(props: ListCodeProps) {
  function copyListCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <Button onClick={copyListCodeToClipboard}>
      <div>
        <img src={copyIcon} alt="Copy List Code" />
      </div>
      <span>Lista #{props.code}</span>
    </Button>
  )
}