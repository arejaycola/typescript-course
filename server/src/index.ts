import express, { Request, response, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({keys: ['asdfasdf']}));
app.use(router);

// app.get('/', (req: Request, res: Response) => {
// 	res.send(`
//         <div>
//             <h1>Hi there</h1>
//         </div>
//     `);
// });

app.listen(3000, () => {
	console.log('listening on port 3000');
});
