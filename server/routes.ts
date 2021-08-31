import app from './bootstrap';
import authRoutes from '../HTTP/routes/AuthRoutes';
import todoRoutes from '../HTTP/routes/TodoRoutes';

app.use("auth", authRoutes);
app.use("todo", todoRoutes);
