import 'dotenv/config';

import express, {
  ErrorRequestHandler,
  Express,
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';

// Add Cluster Route...
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
// ROUTES---

const PORT: number = 5000;

// allows backend to get file:
const app: Express = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }) as RequestHandler);
// app.use('/client', express.static(path.resolve(__dirname, '../client')));

app.get('/dashboard', (req: Request, res: Response) => {
  res.status(200).sendFile(path.resolve(__dirname, '../', 'index.html'));
});

app.use(
  '*',
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.status(404).send('Not Found');
  }
);

app.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const defaultError = {
      log: 'Express error handler caught unkown middleware error',
      status: 500,
      message: { err: 'An error occured' },
    };

    const errorObj = Object.assign({}, defaultError, err);
    console.log('error.Obj.log', errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(PORT, () => {
  console.log(`Server running: ${server}`);
});
