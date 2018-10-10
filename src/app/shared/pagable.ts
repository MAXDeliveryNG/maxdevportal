import { Pagination } from 'app/models/pagination';
import { Subject } from 'rxjs/Subject';
import { DatagridPagination } from 'clarity-angular';


export class Pageable {
    pagination$: Subject<Pagination> = new Subject();
    currentPage = 1;
    offset = 0;
    nextOffset: number;
    perPage = 20;
    total: number;
    pager: DatagridPagination;

    constructor() {
        this.pagination$.subscribe(pagination => {
            this.total = pagination.rowCount;
            this.offset = pagination.offset;
        })
    }

    setPager(pager: DatagridPagination) {
        this.pager = pager;
        this.pager.currentChanged.subscribe(page => {
            this.nextOffset = (this.perPage * page) - this.perPage;
        });
    }

    destroyPagination() {
        this.pagination$.unsubscribe();
        this.pager.currentChanged.unsubscribe();
    }
}
