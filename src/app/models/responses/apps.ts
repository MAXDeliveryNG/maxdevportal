import { Pagination } from "app/models/pagination";

export interface Apps {
    status: string;
    data: any[];
    pagination: Pagination;
}