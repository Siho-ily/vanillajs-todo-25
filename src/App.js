import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

export default function App({ $target }) {
    let initialState = [
        { id: 1, text: '할일1' },
        { id: 2, text: '할일2' },
        { id: 3, text: '할일3' }
    ];

    const onSubmit = text => {
        const nextState = [...todoList.state, { id: todoList.state.length + 1, text }];
        todoList.setState(nextState);
        console.log(nextState);
    };
    const onDelete = (id) => {
		const nextState = todoList.state.filter(row => row.id !== id);
		todoList.setState(nextState);
	};

    new TodoForm({ $target, onSubmit });
    const todoList = new TodoList({ $target, initialState, onDelete });
}
