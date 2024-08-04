module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    
    if (number === 0) {
        return units[0]
    }
    
    let result = ''

    if (number >= 100) {
        let hundred = Math.floor(number / 100)
        result += units[hundred] + ' hundred'
        number = number % 100
    }

    if (number >= 10 && number < 20) {
        if (result !== '') result += ' ';
        result += teens[number - 10]
        return result;
    }

    if (number >= 20) {
        let ten = Math.floor(number / 10)
        if (result !== '') result += ' ';
        result += tens[ten]
        number %= 10
    }

    if (number > 0 && number < 10) {
        if (result !== '') result += ' ';
        result += units[number]
    }

    return result
}
