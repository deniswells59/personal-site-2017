import fs from 'fs';
import express from 'express';
import http from 'http';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import { StaticRouter as Router, matchPath } from 'react-router';
import App from '../src/components/App';

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const routes = [
  '/',
];

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));


app.use('*', (req, res) => {
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
    if (!match) {
        res.status(404).send(render(<NoMatch />));
        return;
    }

    res.status(200).send(render(
      (
        <StaticRouter context={{}} location={req.url}>
          <App page='/' />
        </StaticRouter>
      )
    ))
});

server.listen(port, err => {
  console.log(err || `Listening on port ${port}`);
});
