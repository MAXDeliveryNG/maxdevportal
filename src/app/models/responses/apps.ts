import { Pagination } from "app/models/pagination";
import { App } from "app/models/data/app";

export interface Apps {
    status: string;
    data: App[];
    pagination: Pagination;
}