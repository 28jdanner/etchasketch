const container = document.querySelector('#container');
const button = document.querySelector('button');
function makeGrid(size) {
    container.innerHTML = '';
    for (let i=0; i < size * size; i++) {
        const square = document.makeElement('div');
        square.style.flex = `1 0 calc(100% / ${size})`;
        square.style.height = `calc(100% / ${size})`;
        sqaure.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    }
}
button.addEventListener('click', () => {
    let size = parseInt(prompt('put the dims (short for dimensions) that it should have:'));
    if (size > 0 && size <= 100) {
        makeGrid(size);
    }
});
makeGrid(16);