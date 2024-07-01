function add(numbers: string): number {
    if (numbers === "") {
        return 0;
    }

    const delimiter = /,|\n/;
    const numberArray = numbers.split(delimiter).map(num => parseInt(num, 10));

    return numberArray.reduce((sum, num) => sum + num, 0);
}
