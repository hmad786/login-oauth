import express from 'express';
import routes from './routes';

import configs from "../config/server";

const app = express();
const {PORT} = configs;

app.use(express.json());
app.use(routes);
app.listen(PORT, () => {
  console.log(`SERVER STARTED PORT: ${PORT}`);
});

export default app;