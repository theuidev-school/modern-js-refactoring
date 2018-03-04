import { symbolService } from './symbol.service';

export class StockSymbol {

    symbol = null;
    price = null;
    companyName = null;
    issueType = null;
    CEO = null;
    industry = null;
    website = null;
    description = null;

    constructor(symbol) {
        this.symbol = symbol;
    }

    async load() {
        const [price, info] = await Promise.all([
            symbolService.getStockPrice(this.symbol),
            symbolService.getCompanyInfo(this.symbol)
        ]);

        Object.assign(this, {
            price,
            ...info
        });

        return this;
    }
}
