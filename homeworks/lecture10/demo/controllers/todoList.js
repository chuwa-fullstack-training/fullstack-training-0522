const todo = require('../models/schema');
const todoSchema = require('../models/schema');

var todos = [];

const createTodo = async (req, res) => {
    try{
        console.log(req.body);
        const max_id = await todoSchema.findOne().sort({ id: -1 });
        console.log("max id: " + max_id);
        let next_id;
        max_id? next_id = max_id.id + 1 : next_id = 1;
        const todoItem = new todoSchema ({
            id : next_id ?? 1,
            todo : req.body.todo ?? "",
            done : req.body.completed ?? false
        });

        await todoItem.save();
        res.status(201).json({ message: 'New todo created' });
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};
/**
 * {
  "title" : "test1",
  "completed" : false
}
 * localhost:3000/api/todos
 * 
 */


// app.get('/', (req, res) => {
//   res.render('index', { todos });
// });
const getOneTodo = async (req, res) => {
    try{
        const todoItem = await todoSchema.find({id : req.params?.id});
        res.status(200).json(todoItem);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAllTodos= async (req, res) => {
    try{
        todos = await todoSchema.find();
        res.status(200).render('index',{todos});
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateTodo = async (req, res) => {
    try{
        const todoItem = await todoSchema.findOne({id : req.params?.id});
        todoItem.done = !(todoItem.done);

        await todoItem.save();
        res.status(200).json(todoItem);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteTodo = async (req, res) => {
    try{//findbyid: mixed with id attribute(Number) and default_id(object)
        const todoItem =  await todoSchema.findOneAndDelete({id : req.params?.id});//findone: find item by its attribute
        console.log(req.params.id);
        await todoItem.save();
        res.status(200).json({ message: 'This todo is deleted' });
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createTodo,
    getAllTodos,
    getOneTodo,
    updateTodo,
    deleteTodo
};