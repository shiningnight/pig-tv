"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const streams_module_1 = require("./streams/streams.module");
const core_module_1 = require("./core/core.module");
const tokenVerify_middleware_1 = require("./core/tokenVerify.middleware");
const users_module_1 = require("./users/users.module");
let ApplicationModule = class ApplicationModule {
    configure(consumer) {
        consumer
            .apply(tokenVerify_middleware_1.TokenVerifyMiddleware)
            .forRoutes('/user');
    }
};
ApplicationModule = __decorate([
    common_1.Module({
        imports: [
            core_module_1.CoreModule,
            streams_module_1.StreamsModule,
            users_module_1.UsersModule
        ]
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=app.module.js.map