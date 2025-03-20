"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const express = require("express");
const serverless_express_1 = require("@vendia/serverless-express");
const common_1 = require("@nestjs/common");
const expressApp = express();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp));
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Campaign API')
        .setDescription('API para gestionar campañas')
        .setVersion('1.0')
        .addTag('Campaigns')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/swagger', app, document);
    await app.init();
}
bootstrap().then(() => console.log('NestJS App Initialized'));
exports.handler = (0, serverless_express_1.configure)({ app: expressApp });
//# sourceMappingURL=main.js.map