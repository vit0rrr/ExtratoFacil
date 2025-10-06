console.log("O site foi carregado com sucesso!");

// Futuramente, a lógica para interagir com os elementos virá aqui.
// Exemplo:
const fileInput = document.getElementById('file-input');
const uploadButton = document.getElementById('upload-button');

uploadButton.addEventListener('click', () => {
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        console.log(`Arquivo selecionado: ${file.name}`);
        alert(`Você selecionou o arquivo: ${file.name}. A lógica de conversão (backend) `);
    } else {
        alert("Por favor, selecione um arquivo PDF primeiro.");
    }
});