import { EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
export declare class TheadTitlesRowComponent {
    grid: Grid;
    isAllSelected: boolean;
    source: DataSource;
    sort: EventEmitter<any>;
    selectAllRows: EventEmitter<any>;
}
