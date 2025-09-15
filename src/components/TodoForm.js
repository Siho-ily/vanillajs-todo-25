export default function TodoForm({ $target }) {
    const $form = document.createElement('form');

    $form.innerHTML = `
		<input />
		<button>추가</button>
	`;
    $target.appendChild($form);
}
