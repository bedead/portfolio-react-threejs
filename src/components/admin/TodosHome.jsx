import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, doc, updateDoc, addDoc, deleteDoc } from 'firebase/firestore';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [editTodoId, setEditTodoId] = useState(null);
    const [editTodoData, setEditTodoData] = useState({});
    const db = getFirestore();

    useEffect(() => {
        const fetchTodos = async () => {
            const querySnapshot = await getDocs(collection(db, 'todos'));
            const todosData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTodos(todosData);
        };

        fetchTodos();
    }, [db]);

    const handleEditClick = (todo) => {
        setEditTodoId(todo.id);
        setEditTodoData(todo);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditTodoData({ ...editTodoData, [name]: value });
    };

    const handleSaveClick = async (id) => {
        if (window.confirm('Are you sure you want to save this information permanently?')) {
            try {
                const todoDoc = doc(db, 'todos', id);
                await updateDoc(todoDoc, editTodoData);
                setTodos(todos.map(todo => (todo.id === id ? { ...editTodoData, id } : todo)));
                setEditTodoId(null);
                alert('Todo updated successfully!');
            } catch (error) {
                console.error('Error updating todo: ', error);
                alert('Failed to update todo');
            }
        }
    };

    const handleDeleteClick = async (id) => {
        if (window.confirm('Are you sure you want to delete this todo?')) {
            try {
                await deleteDoc(doc(db, 'todos', id));
                setTodos(todos.filter(todo => todo.id !== id));
                alert('Todo deleted successfully!');
            } catch (error) {
                console.error('Error deleting todo: ', error);
                alert('Failed to delete todo');
            }
        }
    };

    const handleAddClick = async () => {
        const newTodo = {
            task: '',
            status: 'Not Started',
            dateStarted: '',
            dateEnded: '',
            description: ''
        };
        try {
            const docRef = await addDoc(collection(db, 'todos'), newTodo);
            setTodos([...todos, { ...newTodo, id: docRef.id }]);
            setEditTodoId(docRef.id);
            setEditTodoData({ ...newTodo, id: docRef.id });
        } catch (error) {
            console.error('Error adding todo: ', error);
            alert('Failed to add todo');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Task</th>
                        <th className="py-2 px-4 border-b">Status</th>
                        <th className="py-2 px-4 border-b">Date Started</th>
                        <th className="py-2 px-4 border-b">Date Ended</th>
                        <th className="py-2 px-4 border-b">Description</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td className="py-2 px-4 border-b">
                                {editTodoId === todo.id ? (
                                    <input
                                        type="text"
                                        name="task"
                                        value={editTodoData.task}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                ) : (
                                    todo.task
                                )}
                            </td>
                            <td className="py-2 px-4 border-b">
                                {editTodoId === todo.id ? (
                                    <select
                                        name="status"
                                        value={editTodoData.status}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    >
                                        <option value="Done">Done</option>
                                        <option value="Not Started">Not Started</option>
                                        <option value="Working">Working</option>
                                        <option value="Cancelled">Cancelled</option>
                                        <option value="Under Progress">Under Progress</option>
                                    </select>
                                ) : (
                                    todo.status
                                )}
                            </td>
                            <td className="py-2 px-4 border-b">
                                {editTodoId === todo.id ? (
                                    <input
                                        type="date"
                                        name="dateStarted"
                                        value={editTodoData.dateStarted}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                ) : (
                                    todo.dateStarted
                                )}
                            </td>
                            <td className="py-2 px-4 border-b">
                                {editTodoId === todo.id ? (
                                    <input
                                        type="date"
                                        name="dateEnded"
                                        value={editTodoData.dateEnded}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                ) : (
                                    todo.dateEnded || 'N/A'
                                )}
                            </td>
                            <td className="py-2 px-4 border-b">
                                {editTodoId === todo.id ? (
                                    <input
                                        type="text"
                                        name="description"
                                        value={editTodoData.description}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                ) : (
                                    todo.description
                                )}
                            </td>
                            <td className="py-2 px-4 border-b">
                                {editTodoId === todo.id ? (
                                    <div className='flex'>
                                        <button
                                            onClick={() => handleSaveClick(todo.id)}
                                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => handleDeleteClick(todo.id)}
                                            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition ml-2"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => handleEditClick(todo)}
                                        className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition"
                                    >
                                        Edit
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                onClick={handleAddClick}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition mt-4"
            >
                Add Todo
            </button>
        </div>
    );
};

export default Home;