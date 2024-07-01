function add(numbers: string): number | string {
    if (numbers === "") {
        return 0;
    }

    let delimiter = /,|\n/;
    if (numbers.indexOf("//") === 0) {
        const delimiterLineEnd = numbers.indexOf('\n');
        delimiter = new RegExp(numbers.substring(2, delimiterLineEnd));
        numbers = numbers.substring(delimiterLineEnd + 1);
    }

    const numberArray = numbers.split(delimiter).map(num => parseInt(num, 10));
    const negativeNumbers = numberArray.filter(num => num < 0);

    if (negativeNumbers.length > 0) {
        return `negative numbers not allowed ${negativeNumbers.join(', ')}`;
    }

    return numberArray.reduce((sum, num) => sum + num, 0);
}
