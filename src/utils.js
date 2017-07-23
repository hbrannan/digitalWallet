export function mapCurrencyToSymbol (currency) {
  const currencyToSymbol = {
    'USD': '$'
  };
  return currencyToSymbol[currency];
}
