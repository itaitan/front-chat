import { Button } from '@/components/atoms/button/button'
import { Input } from '@/components/atoms/input/input'
import { AiOutlineCheck } from 'react-icons/ai'
import { GrFormNextLink } from 'react-icons/gr'
export default function Login() {
  return (
    <div className="flex flex-wrap ">
      <div className="m-5 flex h-96 w-full flex-col items-center justify-center p-5">
        <Button size="small">Default</Button>
        <Button icon={<AiOutlineCheck />} variant="transparent">
          Teste
        </Button>
        <Button icon={<AiOutlineCheck />} variant="cancel">
          Cancelar
        </Button>
        <Button icon={<AiOutlineCheck />} variant="submit">
          Concluido
        </Button>
        <Button icon={<GrFormNextLink />} variant="proceed">
          Continuar
        </Button>
      </div>

      <div className="m-5 flex h-96 w-full flex-col items-center justify-center p-5">
        <Input></Input>
      </div>
    </div>
  )
}
