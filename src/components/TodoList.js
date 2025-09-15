export default function TodoList({ $target, initialState }) {
    const $list = document.createElement('div');

    this.state = initialState;

    this.setState = nextState => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        $list.innerHTML = `
            <ul>
                ${this.state.map(todo => `<li>${todo}</li>`).join('')}
            </ul>
        `;
    };

    $target.appendChild($list);
    this.render();
}
