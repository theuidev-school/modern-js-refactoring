import '@babel/polyfill';
import { StockSymbol } from './core/symbol';

const symbols = [
    'aapl',
    'msft',
    'goog',
    'ibm',
    'amzn'
].map(s => new StockSymbol(s));

symbols.forEach(async (symbol) => {
    try {
        const updatedSymbol = await symbol.load();
        console.log(updatedSymbol);
    } catch (e) {
        console.error(`Failed to download: ${symbol}`)
    }
});

