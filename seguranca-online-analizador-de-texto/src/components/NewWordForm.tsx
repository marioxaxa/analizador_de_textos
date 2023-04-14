import { useContext } from 'react'

import * as Dialog from '@radix-ui/react-dialog';
import { X, PlusCircle  } from "@phosphor-icons/react";

import { AppContext } from './CentralBox';
import { AppContextType } from '../@types/contextType';

type Props = {}

//Componente resposavel por adicionar uma nova palavra a lista de palavras barradas
export default function NewWordForm({}: Props) {

    const { setWordList } = useContext(AppContext) as AppContextType

    //Função responsavel por adicionar uma nova palavra a lista de palavras barradas
    function addNewWord() {
        let newWord = (document.getElementById("newWordInput") as HTMLInputElement).value.toLowerCase()
        setWordList((state) => [...state, newWord ])
    }

  return (
    <div className='absolute -bottom-5  -right-4'>
    <Dialog.Root>
    <Dialog.Trigger asChild>
        <button>
            <PlusCircle  size={48} weight="fill" className='fill-pallet-contrast hover:fill-pallet-contrastlite' />
        </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black opacity-50 data-[state=open]:animate-overlayShow fixed inset-0"/>
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-pallet-background p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className='font-bold text-pallet-contrast text-2xl'>
            Adicione uma nova palavra
        </Dialog.Title>
        <Dialog.Description className='font-thin text-pallet-contrastlite text-sm py-1'>
            Essa palavra estrará para a lista de palavras restritas ao usuario.
        </Dialog.Description>
        <input id='newWordInput' type='text' placeholder='Escreva a palavra aqui.' className='w-full h-2/6 bg-transparent focus:outline-none pt-2 pb-8 text-lg caret-pallet-contrastliteII text-pallet-Foreground'/>
        <Dialog.Close className='absolute top-[10px] right-[10px]'>
            <X size={28} weight="bold" className='fill-pallet-contrast hover:fill-pallet-contrastlite' />
        </Dialog.Close>
        <Dialog.Close onClick={addNewWord} className='h-1/6 w-2/6 absolute bottom-2 left-1/3  bg-pallet-backgrounddark rounded-2xl font-semibold text-pallet-contrast hover:text-pallet-contrastlite hover:bg-pallet-hoverbackground  '>
            Salvar
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  </div>
  )
}