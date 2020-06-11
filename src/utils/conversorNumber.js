// Lib for Converter number in Decimal

class ConversorNumber {
    constructor() {
        this.number = '';
    }

    // eslint-disable-next-line class-methods-use-this
    convertDecimal(number) {
        return new Intl.NumberFormat({ style: 'unit' }).format(number);
    }
}

export default new ConversorNumber();
