const dna = "ATTGCTGCGCATTAACGACGCGTA"

const convertToRna = (text:string):string => {
    const convertedRna = text.replace(/A/g, "U").replace(/T/g, "A").replace(/C/g, "Z").replace(/G/g, "C").replace(/Z/g, "G")
    return convertedRna
}

console.log(convertToRna(dna))