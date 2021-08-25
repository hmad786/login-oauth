import express from 'express';

import configs from "../config/server";

const app = express();
const {PORT} = configs;

app.use(express.json());
app.listen(PORT, () => {
  console.log(`SERVER STARTED PORT: ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.static("./views"));
app.set('view engine', 'ejs');
app.set('views', './views');

export default app;