import { createContext, useState } from 'react'
import { AppContextType } from '../@types/contextType';

import * as Tabs from '@radix-ui/react-tabs';

import TextBox from './TextBox';
import ConfigurationBox from './ConfigurationBox';


type Props = {}

//Contexto global
export const AppContext = createContext<AppContextType|null>(null)

//Componente principal do site que engloba todo o resto
export default function CentralBox({}: Props) {

    //Variavel onde será guardada o comentario escrito pelo usuario
    const [commentedText, setCommentedText] = useState<String>('')

    //Variavel que guarda a lista de palavras que serão barradas
    const [wordList, setWordList] = useState<String[]>(['carro','avião'])

    //Variavel que mapeia a quantidade e posição de palavras barradas usadadas pelo usuario
    const [textMap, setTextMap] = useState<number[]>([])

  return (
    <AppContext.Provider value={{commentedText, setCommentedText, wordList, setWordList, textMap, setTextMap}}>
        <div className='bg-pallet-background w-4/6 h-3/6 rounded-lg border-pallet-contrastliteII border p-4 flex flex-col justify-between items-center outline outline-1 overflow-hidden'>
        <Tabs.Root className='w-full h-full flex flex-col' defaultValue='tab1'>
            <Tabs.List className='shrink-0 flex border-b border-pallet-Foreground h-1/6' aria-label='Teste ou configure seu comentário'>
                <Tabs.Trigger 
                className='h-full flex-1 flex items-center justify-center text-sm leading-none text-pallet-Foreground font-bold select-none hover:text-pallet-contrastlite data-[state=active]:text-pallet-contrast data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default'
                value='tab1'
                >
                    ANALIZADOR
                </Tabs.Trigger>
                <Tabs.Trigger 
                className='h-full flex-1 flex items-center justify-center text-sm leading-none text-pallet-Foreground font-bold select-none hover:text-pallet-contrastlite data-[state=active]:text-pallet-contrast data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default'
                value='tab2'
                >
                    ESPECIFICAÇÕES
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value='tab1' className='grow px-4 pt-1 rounded-b-md outline-none '>
                <TextBox />
            </Tabs.Content>
            <Tabs.Content value='tab2' className='grow p-4 rounded-b-md outline-none '>
                <ConfigurationBox />
            </Tabs.Content>
        </Tabs.Root>
    </div>
    </AppContext.Provider>
    
  )
}