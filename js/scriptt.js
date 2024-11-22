

// function final() {
  
//     document.addEventListener('DOMContentLoaded', function() {
//         const totalScore = localStorage.getItem('totalScore') || 0;
//         document.getElementById('total-score').textContent = totalScore;
    
//         // Clear the scores from localStorage
//         // localStorage.removeItem('mediumScore');
//         // localStorage.removeItem('totalScore');
    
    
    
    
//     });


// }

// final();





document.addEventListener('DOMContentLoaded', function () {
    // Obtém a pontuação da partida atual
    const currentGameScore = localStorage.getItem('currentGameScore') || 0;

    // Atualiza o elemento com ID "total-score" para mostrar apenas os pontos da partida atual
    document.getElementById('total-score').textContent = currentGameScore;

    // Opcional: Limpa a pontuação atual após ser exibida (se necessário)
    // localStorage.removeItem('currentGameScore');
});