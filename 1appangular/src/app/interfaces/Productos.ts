export interface Producto{
    id:string;
    site_id:string;
    title:string;
    seller_id:number;
    automatic_relist: boolean;
    category_id: string;
    official_store_id?: number|undefined;
    price: number;
    base_price: number;
    thumbnail: string;
    permalink:string;
}
export interface ResponseProductos{
    site_id:string;
    query:string|number;
    country_default_time_zone:string;
    sort:{
        id:string;
        name:string
    };
    paging:{[k:string]:string|number};
    results:Producto[]
}
