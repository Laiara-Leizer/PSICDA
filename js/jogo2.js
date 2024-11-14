const colors = ['green', 'white', 'red', 'blue', 'yellow', 'purple'];
const patternGrid = document.getElementById('pattern-grid');
const userGrid = document.getElementById('user-grid');
const checkButton = document.getElementById('check-button');
const result = document.getElementById('result');

// Função para gerar um padrão de cores aleatório
function generateRandomPattern() {
    patternGrid.innerHTML = '';
    for (let i = 0; i < 18; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const div = document.createElement('div');
        div.style.backgroundColor = color;
        patternGrid.appendChild(div);
    }
}

// Função para criar o grid do usuário
function createUserGrid() {
    userGrid.innerHTML = '';
    for (let i = 0; i < 18; i++) {
        const div = document.createElement('div');
        div.style.backgroundColor = 'white'; // Inicializa em branco
        div.addEventListener('click', function () {
            const currentColor = colors.indexOf(div.style.backgroundColor);
            const nextColor = colors[(currentColor + 1) % colors.length];
            div.style.backgroundColor = nextColor;
        });
        userGrid.appendChild(div);
    }
}

// Função para verificar se o padrão do usuário corresponde ao modelo
function checkPattern() {
    const patternColors = Array.from(patternGrid.children).map(div => div.style.backgroundColor);
    const userColors = Array.from(userGrid.children).map(div => div.style.backgroundColor);

    if (JSON.stringify(patternColors) === JSON.stringify(userColors)) {
        result.textContent = 'Parabéns! Você replicou o padrão corretamente!';
        result.style.color = 'lightgreen';
    } else {
        result.textContent = 'Tente novamente!';
        result.style.color = 'red';
    }
}

// Inicializa o jogo
generateRandomPattern();
createUserGrid();

checkButton.addEventListener('click', checkPattern);
