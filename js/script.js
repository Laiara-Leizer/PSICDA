
// totalScore = document.getElementsByClassName('total-score').textContent ;






// var score_box = totalScore;




// // Função para desabilitar as cartas (caso sejam iguais)
// function totalScore_armazenamento() {
    
// document.getElementById("score_box").innerHTML = "Total de Cupcakes: " + score_box;

//     resetBoard();
// }

// totalScore_armazenamento();



    document.addEventListener('DOMContentLoaded', function () {
        // Obtém a pontuação armazenada no localStorage
        const MediumScore = localStorage.getItem('totalScore') || 0;

        // Atualiza o elemento com ID "score_box" com a pontuação total
        document.getElementById('score_box').textContent = MediumScore;
    });

