var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
let Ng2SmartTableTbodyComponent = class Ng2SmartTableTbodyComponent {
    constructor() {
        this.save = new EventEmitter();
        this.cancel = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.custom = new EventEmitter();
        this.edited = new EventEmitter();
        this.userSelectRow = new EventEmitter();
        this.editRowSelect = new EventEmitter();
        this.multipleSelectRow = new EventEmitter();
        this.rowHover = new EventEmitter();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], Ng2SmartTableTbodyComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], Ng2SmartTableTbodyComponent.prototype, "source", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], Ng2SmartTableTbodyComponent.prototype, "deleteConfirm", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], Ng2SmartTableTbodyComponent.prototype, "editConfirm", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], Ng2SmartTableTbodyComponent.prototype, "rowClassFunction", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "save", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "cancel", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "edit", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "delete", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "custom", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "edited", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "userSelectRow", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "editRowSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "multipleSelectRow", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "rowHover", void 0);
Ng2SmartTableTbodyComponent = __decorate([
    Component({
        selector: '[ng2-st-tbody]',
        styleUrls: ['./tbody.component.scss'],
        templateUrl: './tbody.component.html',
    })
], Ng2SmartTableTbodyComponent);
export { Ng2SmartTableTbodyComponent };
//# sourceMappingURL=tbody.component.js.map