import { AppContext } from "./CentralBox";
import { AppContextType } from "../@types/contextType";
import { useContext } from "react";

import { Question, XCircle , CheckCircle  } from "@phosphor-icons/react";

type Props = {}

//Componente que renderiza o icon na tela do analizador
export default function SubmitButton({}: Props) {

    const { textMap } = useContext(AppContext) as AppContextType
    
    //Função que decide que mensagem renderizar
    function renderButtonIcon() {
        if(textMap.includes(1)){
        let badWordCount =textMap.filter(word => word === 1).length
        let warning 
        if(badWordCount === 1) {
            warning = `Seu comentário possui 1 palavra inapropriada`
        } else {
            warning = `Seu comentário possui ${badWordCount} palavras inapropriadas`
        }
          return (
            <div className="w-full h-full flex flex-col justify-between items-center">
                <XCircle size={60} weight="fill" className='fill-pallet-incorrect/100 hover:fill-pallet-incorrect' />
                <p className='font-medium text-lg text-pallet-incorrect/100'>{warning}</p>
            </div>
          )
        } else if(textMap.includes(0)){
            return (
                <div className="w-full h-full flex flex-col justify-between items-center">
                    <CheckCircle size={60} weight="fill" className='fill-pallet-correct/100 hover:fill-pallet-correct/100' />
                    <p className='font-medium text-lg text-pallet-correct/100'>Seu comentário foi aprovado</p>
                </div>
            )
          }
        return (
            <div className="w-full h-full flex flex-col justify-between items-center">
                <Question  weight="fill" className='fill-pallet-contrast hover:fill-pallet-contrastlite text-6xl sm:text-6xl' />
                <p className='font-medium text-lg text-pallet-Foreground'>Clique na ? para testar seu comentário</p>
            </div>
        )
            
      }

  return (
    <>
        {renderButtonIcon()}
    </>
  )
}