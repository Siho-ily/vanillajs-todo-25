import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

export default function App({ $target }) {
    let initialState = ['할일1', '할일2', '할일3'];

    const onSubmit = text => {
        const nextState = [...todoList.state, text];
        todoList.setState(nextState);
        console.log(nextState);
    };

    new TodoForm({ $target, onSubmit });
    const todoList = new TodoList({ $target, initialState });
}
