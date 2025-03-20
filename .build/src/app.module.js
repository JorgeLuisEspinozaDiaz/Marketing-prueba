"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const repositories_module_1 = require("./infrastructure/repositories.module");
const cqrs_1 = require("@nestjs/cqrs");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST || 'database-1.car22e4gqefr.us-east-1.rds.amazonaws.com',
                port: Number(process.env.DB_PORT) || 3306,
                username: process.env.DB_USER || 'admin',
                password: process.env.DB_PASSWORD || 'admin123',
                database: process.env.DB_NAME || 'marketing-prueba',
                autoLoadEntities: true,
                synchronize: true,
                extra: {
                    connectionLimit: 10,
                    acquireTimeout: 20000,
                    connectTimeout: 20000,
                    waitForConnections: true,
                },
            }),
            cqrs_1.CqrsModule,
            repositories_module_1.RepositoriesModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map