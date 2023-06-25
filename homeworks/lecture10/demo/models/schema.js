const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema ({
    id: {
        type : Number
    },
    todo: {
        type: String,
        required: true
    },
    done:{
        type : Boolean, 
        default : false
    }
    
  });

    
const todo = mongoose.model("todo",todoSchema);
module.exports = todo;