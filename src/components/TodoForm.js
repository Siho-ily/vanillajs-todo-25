export default function TodoForm({ $target, onSubmit }) {
    const $form = document.createElement('form');

    onSubmit('할일4');

    $form.innerHTML = `
		<input />
		<button>추가</button>
	`;

    $form.addEventListener('submit', e => {
        e.preventDefault();
        const $input = $form.querySelector('input');
        const text = $input.value;
        onSubmit(text);
    });

    $target.appendChild($form);
}
