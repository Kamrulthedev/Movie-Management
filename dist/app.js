"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const movie_route_1 = require("./modules/Movies/movie.route");
const NotFound_1 = __importDefault(require("./Middleware/NotFound"));
const GolobalErrorHandlar_1 = __importDefault(require("./Middleware/GolobalErrorHandlar"));
const user_route_1 = require("./modules/Users/user.route");
const auth_route_1 = require("./modules/Auth/auth.route");
const app = (0, express_1.default)();
app.use((0, express_1.json)());
app.use('/api/movies', movie_route_1.MovieRouter);
app.use("/api/users", user_route_1.UserRoutes);
app.use("/api/auth", auth_route_1.AuthRoutes);
app.get('/', (req, res) => {
    res.send('Hello Next!');
});
app.use(NotFound_1.default);
app.use(GolobalErrorHandlar_1.default);
exports.default = app;
