function capitalizeOnlyEvery(letters, text) {
    const lowerCasedText = Array.from(text.toLowerCase())
    const lowerCasedLetters = Array.from(letters.toLowerCase())
    const textCapitalized = []
    lowerCasedText.forEach(letter => {
        lowerCasedLetters.forEach(letterToCap => {
            if (letter === letterToCap ){
                letter = letter.toUpperCase()
                return
            }
        })
        textCapitalized.push(letter)
    })
    return textCapitalized.join('')
}
// console.log(capitalizeOnlyEvery("tem", "texto traTei ele mT bem ttTtttT"))