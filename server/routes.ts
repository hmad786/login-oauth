import app from './index';
import authRoutes from '../HTTP/routes/AuthRoutes';
import todoRoutes from '../HTTP/routes/TodoRoutes';

app.use("auth", authRoutes);
app.use("todo", todoRoutes);