import { EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
export declare class Ng2SmartTableTbodyComponent {
    grid: Grid;
    source: DataSource;
    deleteConfirm: EventEmitter<any>;
    editConfirm: EventEmitter<any>;
    rowClassFunction: Function;
    save: EventEmitter<any>;
    cancel: EventEmitter<any>;
    edit: EventEmitter<any>;
    delete: EventEmitter<any>;
    custom: EventEmitter<any>;
    edited: EventEmitter<any>;
    userSelectRow: EventEmitter<any>;
    editRowSelect: EventEmitter<any>;
    multipleSelectRow: EventEmitter<any>;
    rowHover: EventEmitter<any>;
}
