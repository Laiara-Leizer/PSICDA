// Elementos de Canvas e contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Tamanho das formas e textos
const shapeSize = 100;
const shapes = [
    {type: 'rectangle', x: 50, y: 50, width: 150, height: 100, color: 'orange', name: 'Retângulo'},
    {type: 'triangle', x: 300, y: 150, size: shapeSize, color: 'blue', name: 'Triângulo'},
    {type: 'circle', x: 550, y: 100, radius: shapeSize / 2, color: 'green', name: 'Círculo'}
];

// Função para desenhar as formas
function drawShapes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    shapes.forEach(shape => {
        ctx.fillStyle = shape.color;
        if (shape.type === 'rectangle') {
            ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
        } else if (shape.type === 'triangle') {
            ctx.beginPath();
            ctx.moveTo(shape.x, shape.y);
            ctx.lineTo(shape.x - shape.size / 2, shape.y + shape.size);
            ctx.lineTo(shape.x + shape.size / 2, shape.y + shape.size);
            ctx.closePath();
            ctx.fill();
        } else if (shape.type === 'circle') {
            ctx.beginPath();
            ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    });
}

// Checa se as respostas dos campos de texto estão corretas
function checkTextInputs() {
    const inputRetangulo = document.getElementById('inputRetangulo').value.trim().toLowerCase();
    const inputTriangulo = document.getElementById('inputTriangulo').value.trim().toLowerCase();
    const inputCirculo = document.getElementById('inputCirculo').value.trim().toLowerCase();

    const correct = 
        inputRetangulo === 'retângulo' &&
        inputTriangulo === 'triângulo' &&
        inputCirculo === 'círculo';

    if (correct) {
        // Incrementa moedas e armazena no localStorage
        let coins = parseInt(localStorage.getItem('coins') || '0');
        coins++;
        localStorage.setItem('coins', coins);

        // Atualiza o texto do modal com as moedas
        document.getElementById('totalCoins').innerText = coins;

        // Exibe o modal de parabéns
        const parabensModal = new bootstrap.Modal(document.getElementById('parabensModal'));
        parabensModal.show();
    } else {
        alert('Tente novamente! As respostas estão incorretas.');
    }
}

// Reseta o jogo
document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('inputRetangulo').value = '';
    document.getElementById('inputTriangulo').value = '';
    document.getElementById('inputCirculo').value = '';
    drawShapes();
});

// Verifica se o jogador ganhou ao clicar no botão "Verificar"
document.getElementById('checkBtn').addEventListener('click', function () {
    checkTextInputs();
});

// Inicializa o canvas
drawShapes();
