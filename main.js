export function add(str) {
    if (str === "") return 0;

    let delimiter = ",";
    let numbersStr = str;

    if (str.startsWith("//")) {
        const newlineIndex = str.indexOf("\n");
        if (str[2] === '[') {  // Délimiteur personnalisé complexe
            delimiter = str.substring(3, newlineIndex - 1);
        } else {  // Délimiteur personnalisé simple
            delimiter = str.substring(2, newlineIndex);
        }
        numbersStr = str.substring(newlineIndex + 1);
    }

    delimiter = delimiter.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    const normalizedStr = numbersStr.replace(new RegExp(delimiter, 'g'), ',').replace(/\n/g, ',');
    
    const numbers = normalizedStr.split(',')
                                 .map(Number)
                                 .filter(n => n <= 1000 && !isNaN(n));

    const negatives = numbers.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
     }

    return numbers.reduce((a, b) => a + b, 0);
}
 