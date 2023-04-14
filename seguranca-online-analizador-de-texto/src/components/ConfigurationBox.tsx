import { useContext } from 'react'
import { AppContext } from './CentralBox';
import { AppContextType } from '../@types/contextType';

import NewWord from './NewWord';
import NewWordForm from './NewWordForm';

type Props = {}

//Componente gerado pela aba de especificações
export default function ConfigurationBox({}: Props) {

    const { wordList } = useContext(AppContext) as AppContextType

    return (
        <div className='relative h-full'>
        <p className='text-pallet-contrast font-bold text-sm sm:text-lg pb-2' >
                SERÃO BARRADAS AS PALAVRAS:
        </p>
        <div className='w-full h-full max-h-44 flex flex-col items-center overflow-y-auto scrollbar-thin scrollbar-thumb-pallet-hoverbackground scrollbar-track-pallet-backgrounddark '>
            <div className= 'h-full w-full flex-1  '>
                <ul className='flex flex-col gap-2 overflow-hidden flex-wrap pr-1'>
                    {wordList.map((word, i) => {
                        return(<NewWord wordTitle={word} key={i}/>)
                    })}
                </ul>
            </div>
            
        </div>
        <NewWordForm />
        </div>
        
    )
}