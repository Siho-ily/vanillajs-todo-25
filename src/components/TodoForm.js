export default function TodoForm({ $target, onSubmit }) {
    const $form = document.createElement('form');

    this.render = () => {
        $form.innerHTML = `
            <input />
            <button>추가</button>
        `;
    };

    $form.addEventListener('submit', e => {
        e.preventDefault();
        const $input = $form.querySelector('input');
        const text = $input.value;
        if (text.length > 0) {
            onSubmit(text);
            $input.value = '';
        }
    });

    $target.appendChild($form);

    this.render();
}
