function printId(id: number | string) {
    console.log(`Id: ${id}`);
}

let id: string | number = "ruy74";

printId("1h2e3l4o5");
printId(9876);
printId(id);

// usage with typeof - to differentiate the types of arguments within function for correspoding logic to handle them
function printSentence(words: string[] | string) {
    if (typeof words === "string") {
        console.log(words);
    } else {
        console.log(words.join(" "));
    }
}

printSentence(["Programming", "language", "-", "TypeScript"]);
printSentence("Programming language - JavaScript");