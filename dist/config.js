"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    port: process.env.port ? parseInt(process.env.port) : 3000,
    db: {
        url: process.env.DATABASE_URL
    }
};
