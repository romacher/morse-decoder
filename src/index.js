const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr =[]
    let str =""
    let str2 =""
    let arr3 =[]
    let arr2=[]
    let str3=''
    let chank =10
    for(let i=0; i< expr.length; i+=chank){
    str = expr.slice(i,i+chank)
    str2 =str.slice(str.indexOf("1"))
    arr.push(str2)
    str=0
    str2=""} 
    for (let i=0; i<arr.length;i++){
        for(let j=0; j <= arr[i].length; j+=2){
            if(arr[i].slice(j,j+2)=="11"){
                str3+="-"}
            else if(arr[i].slice(j,j+2)=="10"){
                str3+="."}
            else if(arr[i]=="*"){
                str3="*"
            }
        }
        arr2.push(str3) 
        str3=''
    }
        for (let i =0; i<arr2.length; i++){
            if(arr2[i]=="*"){
                arr3.push(' ')
            }
            else {arr2[i] = MORSE_TABLE[arr2[i]] 
            arr3.push(arr2[i])
            } 
        }
    return arr3.join('').toString()
}           

   

module.exports = {
    decode
}