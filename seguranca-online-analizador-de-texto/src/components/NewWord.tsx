import { useContext } from 'react'
import { AppContextType } from '../@types/contextType';

import { Trash } from "@phosphor-icons/react";

import { AppContext } from './CentralBox';

type Props = {
    wordTitle: String
}

//Componente que mostra as palavras barradas ao usuario
export default function NewWord({wordTitle}: Props) {

    const { wordList, setWordList } = useContext(AppContext) as AppContextType

    //Função responsavel por remover uma palavra da lista de palavras barradas
    function removeWord () {
        let filteredWordList = wordList.filter( word => word !== wordTitle )
        setWordList(filteredWordList)
    }

    return (
        <div className= 'w-full h-auto bg-pallet-backgrounddark rounded-lg flex justify-between items-center px-3 py-1 overflow-hidden'>
            <p className='text-pallet-contrastliteII text-lg font-semibold overflow-x-hidden'>
                {wordTitle.toUpperCase()}
            </p>
            <button onClick={removeWord}>
                <Trash size={30} weight="bold" className='fill-pallet-contrast hover:fill-pallet-contrastlite' />
            </button>
        </div>
    )
}