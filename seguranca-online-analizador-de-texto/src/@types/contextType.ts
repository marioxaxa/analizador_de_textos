import { Dispatch, SetStateAction } from "react"

export type AppContextType = {
    commentedText: String
    setCommentedText: Dispatch<SetStateAction<String>>
    wordList: String[]
    setWordList: Dispatch<SetStateAction<String[]>>
    textMap: number[]
    setTextMap: Dispatch<SetStateAction<number[]>>
  }