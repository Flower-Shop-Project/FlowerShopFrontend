export interface StoreItemsFilter {
    type: string | null;
    appointments: Array<string> | null;
    flowerTypes: Array<string> | null;
    minPrice: number | null;
    maxPrice: number | null;
    search: string | null;
}