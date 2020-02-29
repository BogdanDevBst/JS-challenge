const morseCode = {
    "a":".-",
    "b":"-...",
    "c":"-.-.",
    "d":"-..",
    "e":".",
    "f":"..-.",
    "g":"--.",
    "h":"....",
    "i":"..",
    "j":".---",
    "k":"-.-",
    "l":".-..",
    "m":"--",
    "n":"-.",
    "o":"---",
    "p":".--.",
    "q":"--.-",
    "r":".-.",
    "s":"...",
    "t":"-",
    "u":"..-",
    "v":"...-",
    "w":".--",
    "x":"-..-",
    "y":"-.--",
    "z":"--..",
    "0":"-----",
    "1":".----",
    "2":"..---",
    "3":"...--",
    "4":"....-",
    "5":".....",
    "6":"-....",
    "7":"--...",
    "8":"---..",
    "9":"----.",
    " ":"/",
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
    ".-":"a",
    "-...":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
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

    if (input.includes(".") || (input.includes("_"))) {
        document.getElementById("output").value = translateMorse(input);
    } else {
        document.getElementById("output").value = translate(input);
    }
}

document.getElementById("submit").addEventListener("click", writeOutput);
