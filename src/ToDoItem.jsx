import { useState } from 'react';

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, editText);
      setIsEditing(false);
  };

  return  (
    <div className="todo-item">
        {isEditing ? (
        <>
    <input
       type="text"
       value={editText}
     onChange={(e) => setEditText(e.target.value)}
      />
    <button onClick={handleEdit}>Save</button>
    </>
      ) : (
        <>
    <input
    type="checkbox"
    checked={todo.completed}
    onChange={() => toggleComplete(todo.id)}/>
    <span
    style={{
    textDecoration: todo.completed ? 'line-through' : 'none',
    marginLeft: '10px',
     flex: 1
    }}
     >
     {todo.text}
    </span>
    <button onClick={() => setIsEditing(true)}>Edit</button>
     </>
      )}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default ToDoItem;
