




const Capitalize = (str: string) => {

    if (!str) return ""

    // Take out the first letter of the str
    const firstLetter = str.slice(0,1)

    // Take out other characters of the str
    const firstLess = str.substring(1, str.length)

    // Capitalize the seperated first letter
    const capLetter = firstLetter.toUpperCase()   

    // merge all parts together
    const result = capLetter + firstLess

    return result
}
 
export default Capitalize;