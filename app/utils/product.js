const mapCurrency = {
    'USD': '$'
}
export const getCurrencySymbol = (currencyString) => {
    return mapCurrency[currencyString];
}

export const formatPrice = (value, currencyString) => {
    const symbol = getCurrencySymbol(currencyString);
    if(symbol === '$') {
        return `${symbol}${value}`
    }

    return `${value}${symbol}`;
}
