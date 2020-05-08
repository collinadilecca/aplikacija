"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const administrator_service_1 = require("../services/administrator/administrator.service");
let AppController = class AppController {
    constructor(adminstratorService) {
        this.adminstratorService = adminstratorService;
    }
    getIndex() {
        return 'Homepage!';
    }
};
__decorate([
    common_1.Get() // http://localhost:3000/
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getIndex", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [administrator_service_1.AdministratorService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map