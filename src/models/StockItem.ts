

export namespace Stock {
    export enum StockLevel {
        OUT_OF_STOCK,
        VERY_LOW,
        LOW,
        NORMAL,
        HIGHLY_STOCKED
    }


    export class StockItem {
        id: any;
        name: String;
        stockLevel: Stock.StockLevel;

        constructor(id: any, name: String, stockLevel: Stock.StockLevel) {
            this.id = id;
            this.name = name;
            this.stockLevel = stockLevel;
        }
    }
}   