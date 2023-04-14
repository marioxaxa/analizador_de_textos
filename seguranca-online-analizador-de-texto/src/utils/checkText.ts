//Função responsavel pela analise do comentario do usuario
//Entradas: comentario do usuario e lista de palavras barradas
//Saida: mapa das palavras barradas no comentario 
export function checkText(submitedText:String, wordList:String[]) {
    submitedText.toLowerCase()

    let splitedSubmitedText = submitedText.split(' ')

    let submitedTextMap = []

    let regexList = []

    for (let index = 0; index < wordList.length; index++) {
        let regex = new RegExp(String.raw`((\s*\b)${wordList[index]}(\b\s*))`, 'gi')
        regexList.push(regex)
    }

    for (let textIndex = 0; textIndex < splitedSubmitedText.length; textIndex++) {
        for (let wordIndex = 0; wordIndex < wordList.length; wordIndex++) {
            if(regexList[wordIndex].test(splitedSubmitedText[textIndex])) {
                submitedTextMap.push(1)
            } 
        }
        if(submitedTextMap[textIndex] !== 1) {
            submitedTextMap.push(0)
        }
    }

    return(submitedTextMap)
}