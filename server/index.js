import express from 'express';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes.js';

// load env vairables
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.send('Server running and up...🔥');
});
app.use('/api/todos', todoRoutes);

// Middleware
app.use(notFound);
app.use(errorHandler);

// Server listening
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`\nServer listening on port ${PORT}`);
});
