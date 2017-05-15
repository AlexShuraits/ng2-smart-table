import { EventEmitter, AfterViewInit, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
export declare class AddButtonComponent implements AfterViewInit {
    private ref;
    grid: Grid;
    source: DataSource;
    create: EventEmitter<any>;
    constructor(ref: ElementRef);
    ngAfterViewInit(): void;
    onAdd(event: any): void;
}
