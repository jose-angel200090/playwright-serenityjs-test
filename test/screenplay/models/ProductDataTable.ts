import { DataTable } from '@cucumber/cucumber';
import { Product } from './Product';

export class ProductDataTable {
    static toProductList(dataTable: DataTable): Product[] {
        return dataTable.hashes().map(row => ({
            title: row['Title'],
            price: row['Price']
        }));
    }
}