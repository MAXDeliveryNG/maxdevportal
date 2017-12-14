import { Pagination } from "app/models/pagination";

export interface Orders {
    status: string;
    data: any[];
    pagination: Pagination;
}