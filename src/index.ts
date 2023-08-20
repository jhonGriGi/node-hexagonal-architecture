import 'reflect-metadata';
import bodyParser = require('body-parser');
import * as express from 'express';
import morgan = require('morgan');
import {PORT} from './infrastructure/configuration/env_variables';
import router from './infrastructure/driving/routes';

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/v1', router);

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
