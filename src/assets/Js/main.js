// Espera o HTML ser completamente carregado para rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // Encontra o botão e o input escondido pelos seus IDs
    const selectButton = document.getElementById('select-button');
    const fileInput = document.getElementById('file-input');

    // Verifica se os elementos foram encontrados antes de adicionar o evento
    if (selectButton && fileInput) {
        
        // Adiciona um "ouvinte de evento": quando o botão for clicado,
        // a função dentro dele será executada.
        selectButton.addEventListener('click', () => {
            // Simula um clique no input de arquivo escondido
            fileInput.click();
        });

        // (Bônus) Adiciona um ouvinte para quando um arquivo for selecionado
        // A função será executada depois que o usuário escolher um arquivo e fechar a janela
        fileInput.addEventListener('change', () => {
            // Verifica se um arquivo foi realmente selecionado
            if (fileInput.files.length > 0) {
                const fileName = fileInput.files[0].name;
                console.log('Arquivo selecionado:', fileName);
                alert('Você selecionou o arquivo: ' + fileName);
                // Aqui você colocaria a lógica para enviar o arquivo para o backend
            }
        });
    }

});