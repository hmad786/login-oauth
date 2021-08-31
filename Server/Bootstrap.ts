import express from 'express';

import configs from "../config/Server";

const app = express();
const {PORT} = configs;

app.use(express.json());
app.listen(PORT, () => {
  console.log(`SERVER STARTED PORT: ${PORT}`);
});

export default app;