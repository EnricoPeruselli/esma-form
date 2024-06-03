const fromatNumber = (number) => {
    return Number.parseFloat(number).toFixed(2)
}

// regex from TestForREGEX -> Test For REGEX
const regexTaTTa = (string) => {
    let rex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
    let name = string.replace( rex, '$1$4 $2$3$5' );
    return name
}

const regexNoSpace = (string) => {
    return string.replace(/\s/g, '');
}
export { fromatNumber, regexTaTTa, regexNoSpace }