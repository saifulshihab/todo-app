import asyncHandler from 'express-async-handler';
import ToDo from '../models/TodoModel.js';

// desc: get all todos items
// method: GET
export const getTodos = asyncHandler(async (req, res) => {
  const todos = await ToDo.find({});
  if (todos) {
    res.status(200).json({
      status: 'ok',
      data: todos,
    });
  } else {
    res.status(404);
    throw new Error('Todos not found!');
  }
});
// desc: create new todo item
// method: POST
export const createTodo = asyncHandler(async (req, res) => {
  const { title } = req.body;
  const newItem = await ToDo.create({ title });
  if (newItem) {
    res.status(201).json({ status: 'ok', data: newItem });
  } else {
    res.status(500);
    throw new Error('Failed to create new todo item!');
  }
});
// desc: edit a todo item
// method: PUT
export const editTodo = asyncHandler(async (req, res) => {
  const itemId = req.params.itemId;
  const todoItem = await ToDo.findById(itemId);
  if (todoItem) {
    const updateItem = await ToDo.findByIdAndUpdate(
      itemId,
      { $set: req.body },
      { new: true }
    );
    if (updateItem) {
      res.status(200).json({
        status: 'ok',
        data: updateItem,
      });
    } else {
      res.status(500);
      throw new Error('Failed to update todo item!');
    }
  } else {
    res.status(404);
    throw new Error('Item not found!');
  }
});
// desc: delete a todo item
// method: DELETE
export const deleteTodo = asyncHandler(async (req, res) => {
  const itemId = req.params.itemId;
  const todoItem = await ToDo.findById(itemId);
  if (todoItem) {
    await todoItem.remove();
    res.status(200).json({
      status: 'ok',
      data: todoItem,
    });
  } else {
    res.status(404);
    throw new Error('Item not found!');
  }
});
