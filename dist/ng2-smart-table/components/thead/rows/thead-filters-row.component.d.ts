import { EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
export declare class TheadFitlersRowComponent {
    grid: Grid;
    source: DataSource;
    create: EventEmitter<any>;
    filter: EventEmitter<any>;
}
