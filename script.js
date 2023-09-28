let columns = {
    name: '',
    cep: '',
    sogra: '',
    fruta: '',
    carro: '',
    // Adicione mais colunas aqui
};

// Função para sortear uma letra aleatória
function getRandomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet.charAt(randomIndex);
}

// Função para iniciar o jogo
function startGame() {
    const currentLetter = getRandomLetter();
    document.getElementById('letter').textContent = currentLetter;

    // Exibir campos de entrada para cada coluna
    const columnInputs = document.getElementById('column-inputs');
    columnInputs.innerHTML = '';

    for (const columnName in columns) {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', `Palavra que começa com "${currentLetter}"`);
        input.addEventListener('input', (event) => {
            columns[columnName] = event.target.value;
        });

        const label = document.createElement('label');
        label.textContent = `${columnName}: `;
        label.appendChild(input);

        columnInputs.appendChild(label);
    }

    // Troca de tela
    document.getElementById('letter-screen').style.display = 'none';
    document.getElementById('rules-screen').style.display = 'block';
}

// Event listener para iniciar o jogo quando o botão for clicado
document.getElementById('start-game-button').addEventListener('click', startGame);
