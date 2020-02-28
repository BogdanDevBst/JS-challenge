const morseCode = {
    "a":"._",
    "b":"_...",
    "c":"_._.",
    "d":"_..",
    "e":".",
    "f":".._.",
    "g":"__.",
    "h":"....",
    "i":"..",
    "j":".___",
    "k":"_._",
    "l":"._..",
    "m":"__",
    "n":"_.",
    "o":"___",
    "p":".__.",
    "q":"__._",
    "r":"._.",
    "s":"...",
    "t":"_",
    "u":".._",
    "v":"..._",
    "w":".__",
    "x":"_.._",
    "y":"_.__",
    "z":"__..",
    "0":"_____",
    "1":".____",
    "2":"..___",
    "3":"...__",
    "4":"...._",
    "5":".....",
    "6":"_....",
    "7":"__...",
    "8":"___..",
    "9":"____.",
    " ":"       ",
    "&":".-...",
    "'":".----.",
    "@":".--.-.",
    ")":"-.--.-",
    "(":"-.--.",
    ":":"---...",
    ",":"--..--",
    "=":"-...-",
    "!":"-.-.--",
    ".":".-.-.-",
    "-":"-....-",
    "+":".-.-.",
    '"':".-..-.",
    "?":"..--..",
};

const englishCode = {
    "._":"a",
    "_...":"b",
    "_._.":"c",
    "_..":"d",
    ".":"e",
    ".._.":"f",
    "__.":"g",
    "....":"h",
    "..":"i",
    ".___":"j",
    "_._":"k",
    "._..":"l",
    "__":"m",
    "_.":"n",
    "___":"o",
    ".__.":"p",
    "__._":"q",
    "._.":"r",
    "...":"s",
    "_":"t",
    ".._":"u",
    "..._":"v",
    ".__":"w",
    "_.._":"x",
    "_.__":"y",
    "__..":"z",
    "_____":"0",
    ".____":"1",
    "..___":"2",
    "...__":"3",
    "...._":"4",
    ".....":"5",
    "_....":"6",
    "__...":"7",
    "___..":"8",
    "____.":"9",
    "       ":" ",
    ".-...":"&",
    ".----.":"'",
    ".--.-.":"@",
    "-.--.-":")",
    "-.--.":"(",
    "---...":":",
    "--..--":",",
    "-...-":"=",
    "-.-.--":"!",
    ".-.-.-":".",
    "-....-":"-",
    ".-.-.":"+",
    ".-..-.":'"',
    "..--..":"?"
};

const translate = string => {

    return string.split("").map(convertToMorse).join(" ");
}

const convertToMorse = letter => {
    return morseCode[letter];
}

// reverse mode

const translateMorse = morse => {
    return morse.split(" ").map(convertToEnglish).join("");
}

const convertToEnglish = word => {
    return englishCode[word];
}


const writeOutput = () => {
    let input = document.getElementById("input").value.toLowerCase();

    if (input[0].includes(".") || (input.includes("_"))) {
        document.getElementById("output").value = translateMorse(input);
    } else {
        document.getElementById("output").value = translate(input);
    }
}

document.getElementById("submit").addEventListener("click", writeOutput);



// const translateInput = () => {
//     document.getElementById("output").innerHTML = "";
//     //split input separated by spaces into an array
//     const getInput = document.getElementById("input").value.toLowerCase().split(" ");
    
    //check to see if input is morse. If so run function to translate
    
//     else {
//         const changeToMorse = getInput.map(convertWord);
//         document.getElementById("output").innerHTML = changeToMorse.join("");
//     }
// }