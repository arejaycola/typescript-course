"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
var cookie_session_1 = __importDefault(require("cookie-session"));
var app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ['asdfasdf'] }));
app.use(loginRoutes_1.router);
// app.get('/', (req: Request, res: Response) => {
// 	res.send(`
//         <div>
//             <h1>Hi there</h1>
//         </div>
//     `);
// });
app.listen(3000, function () {
    console.log('listening on port 3000');
});
