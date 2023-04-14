import { checkText } from '../utils/checkText';
import { useContext } from "react";

import { AppContext } from "./CentralBox";
import { AppContextType } from "../@types/contextType";

import SubmitButton from './SubmitButton';

type Props = {}

//Componente responsavel pela caixa de texto onde o usuario escreve o comentario
export default function TextBox({}: Props) {

    const { wordList, setTextMap, setCommentedText } = useContext(AppContext) as AppContextType

    //Função responsavel por resetar as variaveis de texto e map quando o usuario começar a escrever 
    function reset() {
        setCommentedText('')
        setTextMap([])
    }

    //Função responvavel por atualizar as variveis de texto e map como também chamar a função que identifica as palavras barradas
    function onTextSubmit() {
        let text = (document.getElementById("commentSubmited") as HTMLInputElement).value
        if(!text) return
        setCommentedText(text)
        setTextMap(checkText(text, wordList)) 
    }

    return (
        <div className='w-full h-full flex flex-col justify-between items-center'>
            <textarea 
            onChange={reset}
            id='commentSubmited'
            placeholder='Escreva seu comentário aqui.'
            autoFocus
            spellCheck='false'
            className='bg-transparent w-full h-5/6 focus:outline-none resize-none text-lg sm:text-2xl caret-pallet-contrastliteII text-pallet-Foreground scrollbar-thin scrollbar-thumb-pallet-hoverbackground scrollbar-track-pallet-backgrounddark'
            />
            <button onClick={onTextSubmit}>
                <SubmitButton />
            </button>
        </div>
    )
}