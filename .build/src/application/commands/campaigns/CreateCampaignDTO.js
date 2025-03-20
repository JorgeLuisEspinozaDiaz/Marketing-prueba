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
exports.CreateCampaignDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCampaignDto {
    user_id;
    name;
    process_date;
    process_hour;
    process_status;
    phone_list;
    message_text;
}
exports.CreateCampaignDto = CreateCampaignDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID del usuario que crea la campaña' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCampaignDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Promo de verano', description: 'Nombre de la campaña' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCampaignDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-03-19', description: 'Fecha de la campaña (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateCampaignDto.prototype, "process_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '14:30:00', description: 'Hora de procesamiento (HH:MM:SS)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCampaignDto.prototype, "process_hour", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Estado de la campaña' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCampaignDto.prototype, "process_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '555-1234,555-5678', description: 'Lista de teléfonos separados por comas' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCampaignDto.prototype, "phone_list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '¡Oferta especial!', description: 'Texto del mensaje' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCampaignDto.prototype, "message_text", void 0);
//# sourceMappingURL=CreateCampaignDTO.js.map