import express from 'express';
import {
  createTodo,
  deleteTodo,
  editTodo,
  getTodos,
} from '../controller/todoController.js';
const router = express.Router();

router.route('/').get(getTodos).post(createTodo);
router.route('/:itemId').put(editTodo).delete(deleteTodo);

export default router;
