export default function TodoList({ $target, initialState }) {
    const $list = document.createElement('div');

    $list.innerHTML = `
		<ul>
			${initialState.map(todo => `<li>${todo}</li>`).join('')}
		</ul>
	`;

    $target.appendChild($list);
}
