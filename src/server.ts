import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import shodanQuotes from './shodan';

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

let message = 'asd';
let backGround = 'https://storage.pixteller.com/designs/designs-images/2019-03-27/05/love-and-passion-background-backgrounds-romantic-1-5c9b994b4e604.png';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
	res.render('index', { message, backGround });
});

app.get('/m/:message', (req, res) => {
	message = req.params.message;
	res.end();
});

app.get('/b/:backGround', (req, res) => {
	backGround = req.params.backGround;
	res.end();
});

app.get('/shodan', (req, res) => {
	res.send(shodanQuotes[Math.floor(Math.random() * shodanQuotes.length)]);
});

app.listen(port, () => {
	// tslint:disable-next-line:no-console
	console.info(`server started at http://localhost:${port}`);
});
