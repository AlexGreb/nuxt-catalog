const currencyStrategies = {
    USD: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumIntegerDigits: 2,
        minimumFractionDigits: 2
    }),
};


export function formatPrice (price, type) {
    const strategy = currencyStrategies[type];
    if (!strategy) throw new Error("Unknown strategy: " + type);
    return strategy.format(price)
}
