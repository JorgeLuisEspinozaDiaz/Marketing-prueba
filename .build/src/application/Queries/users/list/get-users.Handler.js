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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const get_users_query_1 = require("./get-users.query");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../../../domain/entities/user.entity");
const typeorm_2 = require("typeorm");
let GetUsersHandler = class GetUsersHandler {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(query) {
        return await this.userRepository.find({ select: ['id', 'username'], });
    }
};
exports.GetUsersHandler = GetUsersHandler;
exports.GetUsersHandler = GetUsersHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_users_query_1.GetUserQuery),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GetUsersHandler);
//# sourceMappingURL=get-users.Handler.js.map